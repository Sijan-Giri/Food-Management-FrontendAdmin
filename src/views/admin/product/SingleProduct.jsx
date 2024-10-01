import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct } from 'store/productSlice';
import { fetchProduct } from 'store/productSlice';


const SingleProduct = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.product);
    const [select , setSelect] = useState('')
    
    const handleStatus = (e) => {
        const newStatus = e.target.value;
        setSelect(newStatus)
        dispatch(updateProduct(id,newStatus))
    }

    const [filteredProduct] = products?.filter((product) => product._id == id);
    console.log(filteredProduct);

    useEffect(() => {
      dispatch(fetchProduct())
    },[])

  return (
    <>
<div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
  <div className="flex justify-start item-start space-y-2 flex-col">
    <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Product</h1>
    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
  </div>
  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                    <>
                    <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div className="pb-4 md:pb-8 w-full md:w-40">
            <img className="w-full hidden md:block" src={filteredProduct?.productImage} alt="product" />
            <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
          </div>
          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{filteredProduct?.productName}</h3>
              
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base dark:text-white xl:text-lg leading-6">{filteredProduct?.productDescription}</p>
              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{filteredProduct?.productPrice}</p>
              <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">{filteredProduct?.productQuantity}</p>
            </div>
          </div>
        </div>
                </>
      </div>
      <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
      </div>
    </div>
    <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
      <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">   
        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
          </div>
          <form class="max-w-sm mx-auto py-8">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Product Status</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleStatus}>
              <option value="available">available</option>
              <option value="unavailable">unavailable</option>
            </select>
          </form>
          <form class="max-w-sm mx-auto py-4">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Payment Status</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option ></option>
              <option value="paid">paid</option>
              <option value="unpaid">unpaid</option>
            </select>
          </form>
              <div className="flex w-full justify-center items-center md:justify-start md:items-start">
            <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800" >Cancel Order</button>
          </div>
              <div className="flex w-full justify-center items-center md:justify-start md:items-start">
            <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Delete Order</button>
          </div>     
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default SingleProduct