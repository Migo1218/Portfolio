import React from 'react'
import code from '../img/code.png'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
             
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src={code} alt="Workflow"/>
                <img className="hidden lg:block h-8 w-auto" src={code} alt="Workflow"/>
                <a href="#" className="text-indigo-400 hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">PORTFOLIO</a>
              </div>

              

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
      
                  <a href="#aboutme" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About me</a>
      
                  <a href="#skills" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Technologies</a>
      
                  <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                </div>
              </div>
            </div>
           
          </div>
        </div>

       
       
          
      
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
      
            <a href="#aboutme" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About me</a>
      
            <a href="#skills" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>
      
            <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
