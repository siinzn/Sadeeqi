import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="font-bold text-3xl bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent" style={{fontFamily: 'Nexa, sans-serif'}}>
            Sadeeqi
          </h1>
          <div className="flex gap-12">
            <a href="#about" className="font-bold text-lg text-gray-200 hover:text-green-400 transition-colors" style={{fontFamily: 'Nexa, sans-serif'}}>
              About
            </a>
            <a href="#services" className="font-bold text-lg text-gray-200 hover:text-green-400 transition-colors" style={{fontFamily: 'Nexa, sans-serif'}}>
              Services
            </a>
            <a href="#designs" className="font-bold text-lg text-gray-200 hover:text-green-400 transition-colors" style={{fontFamily: 'Nexa, sans-serif'}}>
              Designs
            </a>
            <a href="#download" className="font-bold text-lg text-gray-200 hover:text-green-400 transition-colors" style={{fontFamily: 'Nexa, sans-serif'}}>
              Download
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar