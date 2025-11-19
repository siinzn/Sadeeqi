import React from 'react'

const AppDesign = () => {
  return (
    <div>
      <section id="designs" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-12 text-center" style={{fontFamily: 'Nexa, sans-serif'}}>
            App Design
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder Image 1 */}
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-9/19">
              <div className="text-center">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400 text-lg" style={{fontFamily: 'Nexa, sans-serif'}}>iPhone Screenshot 1</p>
                </div>
              </div>
            </div>

            {/* Placeholder Image 2 */}
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-9/19">
              <div className="text-center">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400 text-lg" style={{fontFamily: 'Nexa, sans-serif'}}>iPhone Screenshot 2</p>
                </div>
              </div>
            </div>

            {/* Placeholder Image 3 */}
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-9/19">
              <div className="text-center">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400 text-lg" style={{fontFamily: 'Nexa, sans-serif'}}>iPhone Screenshot 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AppDesign