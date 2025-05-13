import React from 'react';
import Footer from '../components/commonLayouts/Footer';
import NavHeader from '../components/commonLayouts/NavHeader';

const CommonLayout = (props) => {
    return (
        <>
        <NavHeader/>
            {props.children}
        <Footer/>
    </>
    );
};

export default CommonLayout;