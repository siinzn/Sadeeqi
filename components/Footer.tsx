import React from 'react'

const Footer = () => {
  return (
    <div>
      <section id="download" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-8" style={{fontFamily: 'Nexa, sans-serif'}}>
            Download Sadeeqi
          </h2>
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-10 mb-8">
            <p className="text-xl text-gray-200 leading-relaxed mb-8" style={{fontFamily: 'Nexa, sans-serif', fontWeight: 400}}>
              Get the Sadeeqi app and access essential services, connect with your community, and navigate your rights with confidence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* App Store Button */}
            <a href="#" className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all" style={{fontFamily: 'Nexa, sans-serif'}}>
              Download on App Store
            </a>
            
            {/* Google Play Button */}
            <a href="#" className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all" style={{fontFamily: 'Nexa, sans-serif'}}>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-700 bg-gray-900/80 backdrop-blur-sm py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400" style={{fontFamily: 'Nexa, sans-serif', fontWeight: 400}}>
            © 2025 Sadeeqi. Supporting UAE's workforce with dignity.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer