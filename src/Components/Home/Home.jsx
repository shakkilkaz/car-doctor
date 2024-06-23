import React from 'react';
import Navbar from '../../Page/Navbar/Navbar';
import Banner from '../../Page/bannar/Banner';
import MoreInfo from '../../Page/moreInfo/MoreInfo';
import Services from '../../Page/service/Services';
import ContactInfo from '../../Page/contact/ContactInfo';
import Product from '../../Page/product/Product';
import DetailsInfo from '../../Page/Details/DetailsInfo';
import Footer from '../../Page/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Banner></Banner>
           <MoreInfo></MoreInfo>
           <Services></Services>
           <ContactInfo></ContactInfo>
           <Product></Product>
           <DetailsInfo></DetailsInfo>
           <Footer></Footer>
        </div>
    );
};

export default Home;