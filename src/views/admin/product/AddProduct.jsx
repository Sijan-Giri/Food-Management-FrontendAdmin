import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { STATUSES } from 'store/authSlice';
import { setStatus } from 'store/productSlice';
import { createProduct } from 'store/productSlice'

const AddProduct = () => {

    const dispatch = useDispatch();
    const {status} = useSelector((state) => state.product);
    const navigate = useNavigate()

    const [data , setData] = useState({
        productName : "",
        productDescription : "",
        productPrice : "",
        productStatus : "",
        productQuantity : "",
        productImage : ""
    })

    const handleChange = (e) => {
        const {name , type , value} = e.target;
        setData({
            ...data,
            [name] : type === "file" ? e.target.files[0] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(data))
    }

    if(status == STATUSES.SUCCESS) {
        navigate("/admin/product");
        dispatch(setStatus(STATUSES.LOADING));
    }

  return (
<>
<div class="min-h-screen flex items-center justify-center w-full">
    <div class="bg-white dark:bg-gray-900 shadow-lg rounded-xl px-12 py-10 max-w-4xl w-full">
        <h1 class="text-3xl font-bold text-center mb-6 dark:text-gray-200">Add Product</h1>
        <form onSubmit={handleSubmit}>
            <div class="mb-6">
                <label for="productName" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Name</label>
                <input type="text" name="productName" id="productName" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter product name" required onChange={handleChange}/>
            </div>

            <div class="mb-6">
                <label for="productDescription" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Description</label>
                <textarea id="productDescription" name="productDescription" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter product description" required onChange={handleChange}></textarea>
            </div>

            <div class="mb-6">
                <label for="productPrice" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Price</label>
                <input type="text" id="productPrice" name="productPrice" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter product price" required onChange={handleChange} />
            </div>

            <div class="mb-6">
                <label for="productStatus" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Status</label>
                <select id="productStatus" name="productStatus" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" onChange={handleChange}>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
            </div>

            <div class="mb-6">
                <label for="productQuantity" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Stock Quantity</label>
                <input type="text" id="productQuantity" name="productQuantity" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter product stock quantity" required onChange={handleChange} />
            </div>

            <div class="mb-6">
                <label for="productImage" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Image</label>
                <input type="file" name="productImage" id="productImage" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} />
            </div>

            <button type="submit" class="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Product</button>
        </form>
    </div>
</div>
</>

  )
}

export default AddProduct