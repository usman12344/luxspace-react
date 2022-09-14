import React from 'react';
import { Link } from 'react-router-dom';

export default function JustArrive() {
  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Just Arrived <br />
            This Summer For You
          </h3>
        </div>
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto"></div>

          <div className="flex -mx-4 flex-row relative">

            <div className="px-4 relative card">
              <div className="rounded-xl overflow-hidden card-shadow" style={{width:287, height:386}}>
                <img src="./images/content/img-carousel-1.jpg" alt="cangkir" className="w-full h-full object-cover object-center" />
              </div>
              <h5 className="text-lg font-semibold mt-4">Cangkir Mauttie</h5>
              <span>IDR 89.300</span>
              <Link to="#details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </Link>
            </div>
           

          
            <div className="px-4 relative card">
              <div className="rounded-xl overflow-hidden card-shadow" style={{width:287, height:386}}>
                <img src="./images/content/img-carousel-2.jpg" alt="cangkir" className="w-full h-full object-cover object-center" />
              </div>
              <h5 className="text-lg font-semibold mt-4">Bankyu Minimax</h5>
              <span>IDR 67.900</span>
              <Link to="#details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </Link>
            </div>
           

           
            <div className="px-4 relative card">
              <div className="rounded-xl overflow-hidden card-shadow" style={{width:287, height:386}}>
                <img src="./images/content/img-carousel-3.jpg" alt="cangkir" className="w-full h-full object-cover object-center" />
              </div>
              <h5 className="text-lg font-semibold mt-4">Buku Sidu Edition</h5>
              <span>IDR 12.000.000</span>
              <Link to="#details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </Link>
            </div>
            

           
            <div className="px-4 relative card">
              <div className="rounded-xl overflow-hidden card-shadow" style={{width:287, height:386}}>
                <img src="./images/content/img-carousel-4.jpg" alt="cangkir" className="w-full h-full object-cover object-center" />
              </div>
              <h5 className="text-lg font-semibold mt-4">Watch Notes X</h5>
              <span>IDR 7.000.000</span>
              <Link to="#details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </Link>
            </div>
     

    
            <div className="px-4 relative card">
              <div className="rounded-xl overflow-hidden card-shadow" style={{width:287, height:386}}>
                <img src="./images/content/img-carousel-5.jpg" alt="cangkir" className="w-full h-full object-cover object-center" />
              </div>
              <h5 className="text-lg font-semibold mt-4">Racking</h5>
              <span>IDR 159.000</span>
              <Link to="#details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </Link>
            </div>

        
            <div className="px-4 relative card">
              <div className="rounded-xl overflow-hidden card-shadow" style={{width:287, height:386}}>
                <img src="./images/content/img-carousel-1.jpg" alt="cangkir" className="w-full h-full object-cover object-center" />
              </div>
              <h5 className="text-lg font-semibold mt-4">Bottle</h5>
              <span>IDR 159.000</span>
              <Link to="#details.html" className="stretched-link">
                {/* <!-- fake children --> */}
              </Link>
            </div>
    

          </div>
        
      </div>
    </section>
  )
}
