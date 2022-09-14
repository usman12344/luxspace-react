import React from 'react';

import Header from 'parts/Header';
import Breadcrumb from 'components/Breadcrumb.js'
import Client from 'parts/HomePage/Client';
import Sidemap from 'parts/HomePage/Sidemap';
import Footer from 'parts/HomePage/Footer';
import ProductDetails from 'parts/Details/ProductDetails';
import Suggestion from 'parts/Details/Suggestion';

export default function Details(props) {
  return (
    <>
    <Header theme="black"/>
    <Breadcrumb List={[
      { url: "/", name: "Home" },
      { url: "/categories/91231", name: "Office Room" },
      { url: "/categories/91231/products/7888", name: "Details" },
    ]} />
    <ProductDetails />
    <Suggestion />
    <Client />
    <Sidemap />
    <Footer />
    </>
  )
}
