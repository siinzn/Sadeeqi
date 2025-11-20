import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl">
          <h2 className="text-5xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-8 text-center" style={{fontFamily: 'Nexa, sans-serif'}}>
            About Us
          </h2>
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-10">
            <p className="text-xl text-center text-gray-200 leading-relaxed" style={{fontFamily: 'Nexa, sans-serif', fontWeight: 400}}>
              We are the first centralized support platform dedicated in uplifting the UAE's blue-collar workforce. 
              Our goal is simple: to make their lives easier and safer. Instead of searching everywhere for help, 
              we bring everything into one simple app. We provide easy answers to legal questions, help with basic needs, 
              and a place to connect with others.

            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About