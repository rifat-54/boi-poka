import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='max-w-6xl flex flex-col items-center justify-center mx-auto'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;