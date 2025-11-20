import React from 'react'

const AppDesign = () => {
  return (
    <div>
      <section id="designs" className="min-h-screen flex items-center justify-center py-20 px-6">
  <div className="max-w-6xl w-full">
    <h2 className="text-5xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-12 text-center" style={{fontFamily: 'Nexa, sans-serif'}}>
      App Design
    </h2>
    
    {/* 4 Images in One Line */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {/* Home */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 flex items-center justify-center">
        <img 
          src="/home.png" 
          alt="Sadeeqi Home Screen"
          className="w-full h-auto rounded-xl shadow-lg max-w-[250px]"
        />
      </div>

      {/* Legal */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 flex items-center justify-center">
        <img 
          src="/legal.png" 
          alt="Sadeeqi Legal Resources"
          className="w-full h-auto rounded-xl shadow-lg max-w-[250px]"
        />
      </div>

      {/* AI Chatbot */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 flex items-center justify-center">
        <img 
          src="/ai-chatbot.png" 
          alt="Sadeeqi AI Chatbot"
          className="w-full h-auto rounded-xl shadow-lg max-w-[250px]"
        />
      </div>

      {/* Community */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 flex items-center justify-center">
        <img 
          src="/community.png" 
          alt="Sadeeqi Community Forum"
          className="w-full h-auto rounded-xl shadow-lg max-w-[250px]"
        />
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AppDesign