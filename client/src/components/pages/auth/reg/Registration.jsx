import React,{useState} from 'react'

function Registration() {
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [middlename,setMiddlename]=useState("")
    const [className,setClass]=useState("")
    const [mobile,setMobile]=useState("")
    const [email,setemail]=useState("")

    function regester(){
        console.warn(firstname,lastname,middlename,className,mobile,email);
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-md shadow-md w-96 border border-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-center">Registration</h2>
        <form>
            <div className="mb-4">
                <label htmlFor="first-name" className="block text-gray-600 font-medium">First Name</label>
                <input type="text" id="first-name" name="first-name" value={firstname} onChange={(e)=>setFirstname(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div className="mb-4">
                <label htmlFor="middle-name" className="block text-gray-600 font-medium">Middle Name</label>
                <input type="text" id="middle-name" name="middle-name" value={middlename} onChange={(e)=>setMiddlename(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div className="mb-4">
                <label htmlFor="last-name" className="block text-gray-600 font-medium">Last Name</label>
                <input type="text" id="last-name" name="last-name" value={lastname} onChange={(e)=>setLastname(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div className="mb-4">
                <label htmlFor="className" className="block text-gray-600 font-medium">Class</label>
                <input type="text" id="className" name="className" value={className} onChange={(e)=>setClass(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div className="mb-4">
                <label htmlFor="mobile-number" className="block text-gray-600 font-medium">Mobile Number</label>
                <input type="tel" id="mobile-number" name="mobile-number" value={mobile} onChange={(e)=>setMobile(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"/>
            </div>
            <button type="submit" onClick={regester} className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Register</button>
        </form>
        
    </div>
</div>

  )
}

export default Registration