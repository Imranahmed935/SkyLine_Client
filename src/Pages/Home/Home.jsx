import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BookForm from '../../Components/BookForm/BookForm';

const Home = () => {
    return (
        <div className='min-h-screen lg:w-11/12 mx-auto'>
            <Banner/>
            <BookForm/>
        </div>
    );
};

export default Home;