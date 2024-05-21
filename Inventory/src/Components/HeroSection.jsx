// import bgImage from '../assets/Images/woman-business.png'

function HeroSection() {
  return (
  <>
 <div className="w-[1440px] h-[680px] flex items-center relative">
  <div className="absolute inset-0 bg-gradient-to-l from-white via-lime-950 to-slate-950 backdrop-blur-sm">
    {/* <img className="absolute inset-0 object-cover w-full h-full" src={bgImage}  alt="Background"  />   */}
     
    <div className="w-[734px] h-[387px] flex-col gap-14 inline-flex">
      <div className="flex-col justify-start items-start gap-[18px] flex">
        <div className="pt-28 pl-2.5 justify-center items-center gap-2.5 inline-flex">
          <h1 className="w-[714px] text-white text-[56px] font-bold font-['Montserrat'] leading-[70px]">
            Seamlessly organize and optimize your sales and product inventory
          </h1>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
          <p className="w-[439px] text-white text-xl font-medium font-['Karla']">
            Monitor your goods and sales with our intuitive inventory manager.
          </p>
        </div>
      </div>
      <div className="px-2 justify-start items-start gap-10 inline-flex">
        <button className="px-8 py-3 bg-blue-700 rounded-lg justify-center items-center gap-2 flex">
          <span className="text-center text-white text-sm font-medium font-['Karla']">Get Started</span>
        </button>
        <button className="px-8 py-3 rounded-lg border border-yellow-50 justify-center items-center flex">
          <span className="text-yellow-50 text-sm font-medium font-['Karla']">Watch Demo</span>
        </button>
      </div>
    </div>
    </div>

    </div>
    
      
   
   

  </>
  )
}

export default HeroSection
