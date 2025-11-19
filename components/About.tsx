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
            <p className="text-xl text-gray-200 leading-relaxed" style={{fontFamily: 'Nexa, sans-serif', fontWeight: 400}}>
              We are the first centralized support ecosystem dedicated to uplifting the UAE's blue-collar workforce. 
              Our platform bridges the gap between survival and stability by providing one-stop access to affordable necessities, 
              simplified rights education, and community support. By consolidating scattered resources into a single, 
              accessible interface, we empower workers to navigate daily life with dignity and security. 
              We are building the digital infrastructure for the people who build our cities.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About