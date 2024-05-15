import bgImage from '../assets/Images/woman-business.png'

function HeroSection() {
  return (
  <>
    <div className="w-[1440px] h-[680px] flex justify-start items-center relative">
    <div className="absolute inset-0 bg-gradient-to-l from-white via-lime-950 to-slate-950 backdrop-blur-sm"></div>

    <img className="absolute inset-0 object-cover w-full h-full" src={bgImage}  alt="Background"  />  
    </div>
    
      
   
   

  </>
  )
}

export default HeroSection
