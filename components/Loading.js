import React from 'react'

function Loading() {
  return (
    <div className="loading">
    <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen space-x-3">
        <h1 className='text-4xl'>Loading</h1>
        <div class="flex space-x-2 animate-pulse">
            <div class="w-3 h-3 bg-red-700 rounded-full"></div>
            <div class="w-3 h-3 bg-blue-700 rounded-full"></div>
            <div class="w-3 h-3 bg-green-700 rounded-full"></div>
        </div>

        </div>
  </div>
  )
}

export default Loading