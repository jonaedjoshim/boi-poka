import React from 'react';
import erroImg from '../../assets/errorImg.jpg'

const ErrorPage = () => {
    return (
        <div className='h-screen flex'>
            <img src={erroImg} alt="404_ERROR_PAGE NOT FOUND" className='max-h-screen my-auto'/>
        </div>
    );
};

export default ErrorPage;