import { useState } from 'react';
import UseProducts from '../Hooks/UseProducts';
import Appcard from './Appcard';
import LoadingSpinner from './LoadingSpinner';

const Apps = () => {
    const { products, loading } = UseProducts();
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState(''); // '' | 'asc' | 'desc'
    const [loader, setLoader] = useState(false);

    const handleSearchItem = (item) => {
        setSearch(item.target.value);
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 500);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    if (loading) return <LoadingSpinner />;

    // Search filtering
    const term = search.trim().toLowerCase();
    const searchedProducts = term
        ? products.filter(product =>
            product.skillName.toLowerCase().includes(term)
        )
        : products;

    // Sorting logic 
    const sortedProducts = [...searchedProducts].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price; // Low to High
        } else if (sortOrder === 'desc') {
            return b.price - a.price; // High to Low
        }
        return 0; // No sorting
    });

    return (
        <div>
            <div className="p-3 sm:p-8 md:p-14 lg:p-20 py-3 sm:py-8 md:py-14 lg:py-20">
                <div className="text-center pb-10">
                    <h1 className='font-bold text-3xl md:text-5xl pb-4'>Our All Programs</h1>
                    <p className='font-normal text-[20px]'>Explore All Skill Programs provided by us. We work for better world.</p>
                </div>

                {/* Search and Sort Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-[20px]">
                    <h1 className='font-semibold text-[24px]'>
                        ({sortedProducts.length}) Apps Found
                    </h1>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        {/* Search Input */}
                        <label className='input'>
                            <input
                                value={search}
                                onChange={handleSearchItem}
                                type="search"
                                placeholder='Search Apps'
                            />
                        </label>

                        {/* Sort Dropdown */}
                        <select
                            value={sortOrder}
                            onChange={handleSortChange}
                            className="select select-bordered w-full sm:w-auto"
                        >
                            <option value="">Sort by Price</option>
                            <option value="asc">Price: Low to High</option>
                            <option value="desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {loader && <LoadingSpinner />}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {!loader && sortedProducts.length ? (
                        sortedProducts.map(product => (
                            <Appcard key={product.skillId} product={product} />
                        ))
                    ) : (!loader &&
                        <div className='flex items-center justify-center col-span-full py-20'>
                            <p className='text-[#627382] text-6xl font-semibold'>No Apps Found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Apps;