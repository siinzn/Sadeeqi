import React from 'react'

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 mt-20">
        <div className="max-w-6xl w-full">
          {/* First Part: Text on Left, Cover Image on Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Text */}
            <div className="text-left">
              <h2 className="text-5xl text-center font-bold bg-linear-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent mb-6" style={{fontFamily: 'Nexa, sans-serif'}}>
                Empowering UAE's Blue-Collar Workforce
              </h2>
              <div className="inline-block bg-gray-800/60 backdrop-blur-sm rounded-lg px-6 py-4">
                <p className="text-xl text-center text-gray-200 max-w-md leading-relaxed" style={{fontFamily: 'Nexa, sans-serif'}}>
                  Digital infrastructure for the people who build our cities
                </p>
              </div>
            </div>

            {/* Right Side - Cover Image */}
            <div className="flex justify-center">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center">
                <img 
                  src="/cover.png" 
                  alt="Sadeeqi App Cover"
                  className="h-auto rounded-xl shadow-lg max-w-[280px]"
                />
              </div>
            </div>
          </div>

          {/* Second Part: Stats Section (unchanged position) */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bar Chart - Overcrowding Crisis */}
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4" style={{fontFamily: 'Nexa, sans-serif'}}>
                The Overcrowding Crisis
              </h3>
              <div className="bg-gray-900/60 rounded-lg p-4">
                <img 
                  src="/bar.png" 
                  alt="Overcrowding crisis showing 10+ people per unit"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-gray-300 text-center mt-4 text-sm leading-relaxed" style={{fontFamily: 'Nexa, sans-serif'}}>
                Regulatory standards vs. reality: Workers facing overcrowded living conditions
              </p>
            </div>

            {/* Pie Chart - Income Inequality */}
            <div className="bg-gray-800/70 text-center backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4" style={{fontFamily: 'Nexa, sans-serif'}}>
                Income Inequality
              </h3>
              <div className="bg-gray-900/60 rounded-lg p-4">
                <img 
                  src="/pie-chart.png" 
                  alt="Nearly half the workforce earns less than AED 2,500 per month"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-gray-300 mt-4 text-sm leading-relaxed" style={{fontFamily: 'Nexa, sans-serif'}}>
                Nearly half of the workforce struggles with low wages
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection