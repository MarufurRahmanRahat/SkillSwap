import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        setError(null)
        axios('../Card.json')
            .then(data => setProducts(data.data))
            .catch(err => {
                console.log("Error ", err);

                setError(err)
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            })
    }, [])



    return { products, loading, error }
};

export default UseProducts;