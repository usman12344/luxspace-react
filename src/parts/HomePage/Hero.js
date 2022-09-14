import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="flex items-center hero">

      <div className="w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption">
        <h1 className="text-3xl md:text-5xl leading-tight font-semibold">
          The Room <br className="" />You've Dreaming
        </h1>
        <h2 className="px-8 text-base md:px-0 md:text-lg my-6 tracking-wide">
          Kami menyediakan furniture berkelas yang
          <br className="hidden lg:block" />
          membuat ruangan terasa home
        </h2>
        <div>
          <Link to="/browse-the-room" className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 rounded-full px-8 py-3 mt-4 inline-block flex-none-transition duration-200">Explore Now</Link>
        </div> 
      </div>


      <div className="w-full inset-0 md:relative md:w-1/2">
        <div className="relative hero-image">
          <div className="overlay inset-0 bg-black opacity-30 z-10"></div>
            <div className="overlay right-0 bottom-0 md:inset-0">
              <button className="video hero-cta focus:outline-none z-30 modal-trigger" data-content='<div className="">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UYzBMGbdLj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>'>
                
              </button>
            </div>
            <img 
            className="absolute inset-0 md:relative w-full h-full object-cover object-center"
            src="images/content/image-hero.jpg" alt="house with sofat and some plants" />
          </div>
        
      </div>
    </section>
  )
}
