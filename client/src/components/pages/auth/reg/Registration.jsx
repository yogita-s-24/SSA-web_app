import React from 'react'

function Registration() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-md shadow-md w-96 border border-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-center">Registration</h2>
        <form>
            <div className="mb-4">
                <label for="first-name" className="block text-gray-600 font-medium">First Name</label>
                <input type="text" id="first-name" name="first-name" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div className="mb-4">
                <label for="middle-name" className="block text-gray-600 font-medium">Middle Name</label>
                <input type="text" id="middle-name" name="middle-name" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div className="mb-4">
                <label for="last-name" className="block text-gray-600 font-medium">Last Name</label>
                <input type="text" id="last-name" name="last-name" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div className="mb-4">
                <label for="className" className="block text-gray-600 font-medium">Class</label>
                <input type="text" id="className" name="className" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div className="mb-4">
                <label for="mobile-number" className="block text-gray-600 font-medium">Mobile Number</label>
                <input type="tel" id="mobile-number" name="mobile-number" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div className="mb-4">
                <label for="email" className="block text-gray-600 font-medium">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Register</button>
        </form>
    </div>
</div>

  )
}

export default Registration