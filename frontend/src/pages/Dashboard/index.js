import React, { useState, useEffect } from 'react';
import {ihomeApi} from '../../api';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ihomeApi.get('/shop-list');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    return (
        <div className="container">
            <h1>Olá</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1>Dashboard</h1>
                </div>
            )}
        </div>
    );
}

export default Home;
