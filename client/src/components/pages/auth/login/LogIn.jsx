import React from 'react'

function LogIn() {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-md shadow-md w-96 border border-gray-300">
        <h2 class="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form>
            <div class="mb-4">
                <label for="username" class="block text-gray-600 font-medium">Username or Email</label>
                <input type="text" id="username" name="username" class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-600 font-medium">Password</label>
                <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Login</button>
        </form>
    </div>
</div>

  )
}

export default LogIn