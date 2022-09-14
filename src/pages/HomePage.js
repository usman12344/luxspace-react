import React from 'react';

import Header from 'parts/Header';
import Hero from 'parts/HomePage/Hero';
import JustArrive from 'parts/HomePage/JustArrive';
import BrowseTheRoom from 'parts/HomePage/BrowseTheRoom';
import Client from 'parts/HomePage/Client';
import Sidemap from 'parts/HomePage/Sidemap';
import Footer from 'parts/HomePage/Footer';

export default function HomePage() {
  return (
    <>
    <Header theme="white" position="absolute"/>
    <Hero />
    <BrowseTheRoom />
    <JustArrive />
    <Client />
    <Sidemap />
    <Footer />
    </>
  )
}