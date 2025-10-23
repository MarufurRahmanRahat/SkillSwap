import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import UseProducts from '../Hooks/UseProducts';
import downlogo from '../assets/icon-downloads.png'
import starlogo from '../assets/icon-ratings.png'
import reviewlogo from '../assets/icon-review.png'
import { ContextApiInstalled } from './ContextApiInstalled';

const Appdetails = () => {

     const { skillId } = useParams()
    const { products, loading} = UseProducts()
    
    // const {install,setInstall} = useContext(ContextApiInstalled)
    
    // const checkInstalled = (key) => !!localStorage.getItem(`Item_${key}`);

    //   useEffect(() => {
    //    setInstall(checkInstalled(id));
    //    }, [id]);

    const product = products.find(p => String(p.skillId) === skillId)

    console.log(product);
    // if (loading) return <LoadingSpinner></LoadingSpinner>
    // if(!product) return <Error></Error>
    const { image, skillName, providerName, description,  price, rating  } = product

    const handleAddToList = () => {
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updatedList = []
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === product.id)
            if (isDuplicate) return toast.error(`${skillName} is already installed!`)
            updatedList = [...existingList, product]
        }
        else {
            updatedList.push(product)
        }
        toast.success(`${skillName} is installed successfully!!`)
        localStorage.setItem('wishlist', JSON.stringify(updatedList))
    }

    return (
                <div className='p-3 sm:p-8 md:p-14 lg:p-20'>

            <div className="flex flex-col sm:flex-row gap-[30px]">
                <div className="">
                    <img className='h-full' src={image} alt="company-img" />
                </div>
                <div className="">
                    <h1 className='font-bold text-[32px]'>{skillName}</h1>
                    <p className='font-bold text-[16px] '>Developed by <span className='text-[#9F62F2]'>{providerName}</span></p>

                    <div className="flex gap-[24px] items-center pt-8 pb-6">
                        <div className="">
                            <img className='h-7 w-7' src={downlogo} alt="" />
                            <p className='font-normal text-[16px]'>Downloads</p>
                            <h1 className='font-extrabold text-[30px]'>{price}</h1>
                        </div>
                        <div className="">
                            <img className='h-7 w-7' src={starlogo} alt="" />
                            <p className='font-normal text-[16px]'>Average Ratings</p>
                            <h1 className='font-extrabold text-[30px]'>{rating}</h1>
                        </div>
                        <div className="">
                            <img className='h-7 w-7' src={reviewlogo} alt="" />
                            <p className='font-normal text-[16px]'>Total Reviews</p>
                            <h1 className='font-extrabold text-[30px]'>{price}</h1>
                        </div>
                    </div>
                    {/* <Link onClick={()=>{
                        handleAddToList();
                        setInstall(true);
                        localStorage.setItem(`Item_${id}`,true)
                    }} className='btn bg-[#00D390] text-[#FFFFFF]'>{install?'Installed':`Install Now (${size} MB)`}
                    </Link> */}
                </div>
            </div>


            {/* charts */}
            {/* <div className="p-4 rounded-2xl shadow-md my-10">
                <h2 className="text-[24px] font-semibold mb-5 pl-4">Ratings</h2>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        layout="vertical"
                        data={ratings}
                        margin={{ top: 5, right: 30, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#FF8C00" barSize={25} radius={[0, 6, 6, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div> */}

            {/* description */}
            <div className="mt-10">
                <h1 className='text-[24px] font-semibold mb-5'>Description</h1>
                <p className='font-normal text-[16px]'>{description}</p>
            </div>

        </div>
    );
};

export default Appdetails;