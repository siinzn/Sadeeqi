import React from 'react'

const Services = () => {
  return (
    <div>
      <section id="services" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-12 text-center" style={{fontFamily: 'Nexa, sans-serif'}}>
            Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* AI Chatbot Card */}
            <div className="border-2 border-green-500/30 bg-linear-to-br from-gray-800/80 to-green-900/30 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4" style={{fontFamily: 'Nexa, sans-serif'}}>
                AI Chatbot
              </h3>
              <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-6">
                <p className="text-gray-200 leading-relaxed text-lg" style={{fontFamily: 'Nexa, sans-serif', fontWeight: 400}}>
                  A multilingual AI assistant trained specifically on UAE labor regulations and essential services. 
                  It bridges the literacy gap by translating complex legal texts and essential services into simple, verbal explanations in your native 
                  language. 
                </p>
              </div>
            </div>

            {/* Forum Card */}
            <div className="border-2 border-green-500/30 bg-linear-to-br from-gray-800/80 to-emerald-900/30 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4" style={{fontFamily: 'Nexa, sans-serif'}}>
                Forum
              </h3>
              <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-6">
                <p className="text-gray-200 leading-relaxed text-lg" style={{fontFamily: 'Nexa, sans-serif', fontWeight: 400}}>
                  A safe, moderated digital space where workers can share experiences, ask questions anonymously, 
                  and build a support network with people who understand their journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services