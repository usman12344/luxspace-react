import React from 'react';

import Header from 'parts/Header';

import Footer from 'parts/HomePage/Footer';
import Sidemap from 'parts/HomePage/Sidemap';
import PageErrorMessage from 'parts/PageErrorMessage';


export default function Congratulation(props) {
  return (
    <>
    <Header theme="black"/>

    <PageErrorMessage />

    <Sidemap />
    <Footer />
    </>
  )
}
