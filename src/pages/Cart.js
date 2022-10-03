import React from 'react';

import Header from 'parts/Header';
import Breadcrumb from 'components/Breadcrumb.js'

import Footer from 'parts/HomePage/Footer';
import Sidemap from 'parts/HomePage/Sidemap';
import ShippingDetails from 'parts/Cart/ShippingDetails';
import ShoppingCart from 'parts/Cart/ShoppingCart';

import Document from 'parts/HomePage/Document';


export default function Cart(props) {

  return (
    <Document>
    <Header theme="black"/>
    <Breadcrumb List={[
      { url: "/", name: "Home" },
      { url: "/cart/91231", name: "Shopping Cart" },
    ]} />

    <section className="md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 flex-wrap">
          <ShoppingCart />
          <ShippingDetails />
        </div>
      </div>
    </section>

    <Sidemap />
    <Footer />
    </Document>
  )
}
