import React from 'react'
import "./_main_layout.scss";
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
    return (
        <div className='main__layout__wrapper'>
            <Navigation />
            <div className='main__layout__content'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout