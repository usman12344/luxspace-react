import React from 'react'

export default function ShippingDetails() {
  return (
    <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
      <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
        <form action="success.html">
          <div className="flex flex-start mb-6">
            <h3 className="text-2xl">Shipping Details</h3>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="complete-name" className="text-sm mb-2">Complete Name</label>
            <input data-input type="text" id="complete-name" className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none" placeholder="Input your name" />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email-address" className="text-sm mb-2">Email Address</label>
            <input data-input type="text" id="email-address" className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none" placeholder="Input your email" />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="text-sm mb-2">Address</label>
            <input data-input type="text" id="address" className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none" placeholder="Input your address" />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="phone-number" className="text-sm mb-2">Phone Number</label>
            <input data-input type="number" id="phone-number" className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none" placeholder="Input your phone number" />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm mb-2">Choose Courier</label>

            <div className="flex -mx-2 flex-wrap">

              <div className="px-2 w-6/12 h-24 mb-4">
              <button data-value="fedex" data-name="courier" type="button" className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                <img src="/images/content/payment/fedex.png" alt="" className="object-contain max-h-full" />
              </button>
              </div>

            <div className="px-2 w-6/12 h-24 mb-4">
              <button data-value="dhl" data-name="courier" type="button" className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                <img src="/images/content/payment/dhl.png" alt="" className="object-contain max-h-full" />
              </button>
            </div>

            
          </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm mb-2">Choose Payment</label>

            <div className="flex -mx-2 flex-wrap">

              <div className="px-2 w-6/12 h-24 mb-4">
              <button data-value="midtrans" data-name="payment" type="button" className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                <img src="/images/content/payment/midtrans.png" alt="" className="object-contain max-h-full" />
              </button>
            </div>

            <div className="px-2 w-6/12 h-24 mb-4">
              <button data-value="mastercard" data-name="payment" type="button" className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                <img src="/images/content/payment/mastercard.png" alt="" className="object-contain max-h-full" />
              </button>
            </div>

            </div>
            <div className="flex -mx-2 flex-wrap">

              <div className="px-2 w-6/12 h-24 mb-4">
              <button data-value="btc" data-name="payment" type="button" className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                <img src="/images/content/payment/btc.png" alt="" className="object-contain max-h-full" />
              </button>
            </div>

            <div className="px-2 w-6/12 h-24 mb-4">
              <button data-value="american" data-name="payment" type="button" className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                <img src="/images/content/payment/american.png" alt="" className="object-contain max-h-full" />
              </button>
            </div>

            </div>
          </div>


          <div className="text-center">
            <button type="submit" disabled className="bg-pink-400 text-black focus:text-black focus:outline-none focus:bg-red-200 w-full h-full py-3 rounded-full text-lg focus:text-pink-400 transition-all duration-200 px-6">
              Checkout Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
