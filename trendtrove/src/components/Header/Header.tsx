import React from 'react'

export default function Header() {
  return (
    <div className="bg-bodyColor h-20">
      <div className="container mx-auto flex justify-between items-center h-full">
        <h1 className="text-3xl font-bold">Logo</h1>
        <div className="flex items-center">
          <button className="bg-primaryColor text-black px-4 py-2 rounded-md mr-4">Login</button>
          <button className="bg-primaryColor text-white px-4 py-2 rounded-md">Register</button>
        </div>
      </div>
    </div>
  )
}
