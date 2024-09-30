import React from 'react'

const AddProduct = () => {
  return (
    <>
<div class="min-h-screen flex items-center justify-center w-full">
    <div class="bg-white dark:bg-gray-900 shadow-lg rounded-xl px-12 py-10 max-w-4xl w-full">
        <h1 class="text-3xl font-bold text-center mb-6 dark:text-gray-200">Add Product</h1>
        <form>
            <div class="mb-6">
                <label for="email" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Name</label>
                <input type="email" name="email" id="email" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter product name" required />
            </div>
            <div class="mb-6">
                <label for="username" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Description</label>
                <textarea type="text" id="username" name="username" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter product description" required ></textarea>
            </div>
            <div class="mb-6">
                <label for="phoneNum" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Price</label>
                <input type="tel" id="phoneNum" name="phoneNum" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter product price" required />
            </div>
            <div class="mb-6">
                <label for="phoneNum" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Status</label>
                <input type="tel" id="phoneNum" name="phoneNum" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter product status" required />
            </div>
            <div class="mb-6">
                <label for="phoneNum" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Stock Quantity</label>
                <input type="tel" id="phoneNum" name="phoneNum" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter product stock quantity" required />
            </div>
            <div class="mb-6">
                <label for="password" class="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Product Image</label>
                <input type="password" name='password' id="password" class="shadow-sm rounded-lg w-full px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
                <a href="#" class="text-sm text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2 inline-block">Forgot Password?</a>
            </div>
            <button type="submit" class="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Product</button>
        </form>
    </div>
</div>


    </>
  )
}

export default AddProduct