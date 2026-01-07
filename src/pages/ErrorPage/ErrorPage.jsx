import React from 'react';
import erroImg from '../../assets/errorImg.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img src={erroImg} alt="404_ERROR_PAGE NOT FOUND" className='h-screen'/>
        </div>
    );
};

export default ErrorPage;