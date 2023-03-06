import React from 'react';
import PropTypes from 'prop-types';
import DashboardLayout from '../LayoutContainers/DashboardLayout'; 
import  DashboardNavbar  from '../LayoutContainers/Navbars/DashboardNavbar'
import Footer from '../LayoutContainers/Footer'

const index = () => {
    return (
        <DashboardLayout>
        <DashboardNavbar />
        <Footer />
      </DashboardLayout>
    );
};

index.propTypes = {
    
};

export default index;