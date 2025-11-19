import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-6xl">
          <h2 className="text-6xl font-bold bg-linear-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent mb-6" style={{fontFamily: 'Nexa, sans-serif'}}>
            Empowering UAE's Blue-Collar Workforce
          </h2>
          <div className="inline-block bg-gray-800/60 backdrop-blur-sm rounded-lg px-8 py-6 mt-4">
            <p className="text-2xl text-gray-200 max-w-3xl leading-relaxed" style={{fontFamily: 'Nexa, sans-serif'}}>
              Digital infrastructure for the people who build our cities
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection