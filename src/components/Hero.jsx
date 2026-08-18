import React from 'react'

export const Hero = () => {
  return (
   <>
   <div className="hidden md:block ">
    <img src="/banner/desktopbanner.webp" alt="banner" className="w-full h-auto" />
   </div>
   <div className="md:hidden">
    <img src="/banner/mobilebanner.webp" alt="banner" className="w-full h-auto" />
   </div>
   </>
  )
}
