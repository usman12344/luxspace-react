import React from 'react';

import { useParams } from 'react-router-dom';


import Header from 'parts/Header';
import Breadcrumb from 'components/Breadcrumb.js'
import Client from 'parts/HomePage/Client';
import Sidemap from 'parts/HomePage/Sidemap';
import Footer from 'parts/HomePage/Footer';
import ProductDetails from 'parts/Details/ProductDetails';
import Suggestion from 'parts/Details/Suggestion';
import useAsync from 'helper/hooks/useAsync';
import fetch from 'helper/fetch/index';
import PageErrorMessage from 'parts/PageErrorMessage';



import Document from 'parts/HomePage/Document';

function LoadingProductDetails(){
  return <section className="container mx-auto">
  <div className="flex flex-wrap my-4 md:my-12">
    <div className="w-full md:hidden px-4">
      <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
      <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
    </div>
    <div className="flex-1">
      <div className="slider">
        <div className="thumbnail">

          {
            Array(5).fill().map((_,index) => {
              return <div className="px-4 relative card group" key={index}>
              <div className="rounded-xl item bg-gray-300 animate-pulse" style={{width: 106, height: 106}}>
                
              </div>
            </div>
            })
          }

        </div>
        <div className="preview">
          <div className="item rounded-lg h-full overflow-hidden">
           <div className="item bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 px4 md:p-6">
      <div className="hidden md:block">
        <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="w-40 h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
      </div>

      <div className="w-44 mt-8 h-10 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="w-40 h-4 mt-5 bg-gray-300 animate-pulse rounded-full"></div>
      <hr className="my-8" />
        <div className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="w-40 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="w-96 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="w-64 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
      
    </div>
  </div>
</section>
  
}

function LoadingSuggestion(){
  return <section className="bg-gray-100 px-4 py-16">
  <div className="container mx-auto">
    <div className="flex flex-start mb-4">
      <h3 className="text-2xl capitalize font-semibold">
        complete your room <br /> with what we designed
      </h3>
    </div>
    <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">

    {
        Array(4).fill().map((_,item) => {
          return <div className="relative px-3 w-full md:w-3/12 mb-4" key={item} >
          <div className="rounded-xl p-4 pb-8 relative-bg-white">
            <div className="rounded-xl card-shadow w-full h-48">
            <div className="bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden" style={{ width:287, height:150}}></div>
            <div className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
            <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
          </div>
        </div>
        </div>
        })
      }
      
    </div>
  </div>
</section>
}

export default function Details(props) {
  const {idp} = useParams();

  const {  data, run, isLoading, isError, error } = useAsync({data: []});

  React.useEffect(() => {
    run (
      fetch(
        { url : `/api/products/${idp}` }
      )
    )
  }, [run, idp]);

  

  return (
    <Document>
    <Header theme="black"/>
    <Breadcrumb List={[
      { url: "/", name: "Home" },
      { url: "/categories/91231", name: "Office Room" },
      { url: "/categories/91231/products/7888", name: "Details" },
    ]} />

    {
      isError ? <PageErrorMessage title="Product Not Found" body={error.errors.message} /> :
      <>
          {
            isLoading ? <LoadingProductDetails /> :
          <ProductDetails data={data} />
          } 

          {
            isLoading ? <LoadingSuggestion /> :
          <Suggestion data={data.relatedProducts || {}} />
          } 
      </>
    }

   

     
    <Client />
    <Sidemap />
    <Footer />
    </Document>
  )
}
