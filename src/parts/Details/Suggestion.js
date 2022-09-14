import React from 'react'

export default function Suggestion() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            complete your room <br /> with what we designed
          </h3>
        </div>
        <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">

          <div className="relative px-3 w-full md:w-3/12 mb-4">
          <div className="rounded-xl p-4 pb-8 relative-bg-white">
            <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img src="/images/content/chair-room1.jpg" alt="" className="w-full h-full object-cover object-center" />
            </div>
            <h5 className="text-lg font-semibold mt-4">
              Office Chair 2xl
            </h5>
            <span className="">IDR 89.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
        </div>



        <div className="relative px-3 w-full md:w-3/12 mb-4">
          <div className="rounded-xl p-4 pb-8 relative-bg-white">
            <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img src="/images/content/chair-room2.jpg" alt="" className="w-full h-full object-cover object-center" />
            </div>
            <h5 className="text-lg font-semibold mt-4">
              Office Chair 2xl
            </h5>
            <span className="">IDR 89.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
        </div>



        <div className="relative px-3 w-full md:w-3/12 mb-4">
          <div className="rounded-xl p-4 pb-8 relative-bg-white">
            <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img src="/images/content/chair-room3.jpg" alt="" className="w-full h-full object-cover object-center" />
            </div>
            <h5 className="text-lg font-semibold mt-4">
              Office Chair 2xl
            </h5>
            <span className="">IDR 89.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
        </div>



        <div className="relative px-3 w-full md:w-3/12 mb-4">
          <div className="rounded-xl p-4 pb-8 relative-bg-white">
            <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img src="/images/content/chair-room4.jpg" alt="" className="w-full h-full object-cover object-center" />
            </div>
            <h5 className="text-lg font-semibold mt-4">
              Office Chair 2xl
            </h5>
            <span className="">IDR 89.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}
