
import stockace from '../assets/logo/stockace.svg'
function NavBar() {
  return (
    <>
<div className="w-full h-24 px-14 py-10 bg-[#FAFAFF] flex justify-between items-center">
    <div className="flex items-center">
        <div >
            <img className="w-12 h-11 relative " src= {stockace} alt="Logo" />
        </div>
        <div className="ml-4 text-zinc-800 text-2xl font-medium font-Karla">StockAce</div>
    </div>
    <div className="flex items-center space-x-36 bg-white cursor-pointer rounded-xl">
        <div className="flex items-center space-x-6">
            <a className="px-4 py-2 text-blue-800 text-xl font-medium font-Karla hover:text-blue-600 focus:outline-none focus:text-blue-600">Home</a>
            <a className="px-4 py-2 text-zinc-800 text-xl font-medium font-Karla hover:text-blue-600 focus:outline-none focus:text-blue-600">Features</a>
            <a className="px-4 py-2 text-zinc-800 text-xl font-medium font-Karla hover:text-blue-600 focus:outline-none focus:text-blue-600">About us</a>
            <a className="px-4 py-2 text-zinc-800 text-xl font-medium font-Karla hover:text-blue-600 focus:outline-none focus:text-blue-600">Help</a>
        </div>
        <div className="flex items-center space-x-8">
            <button className="px-6 py-2 text-blue-800 text-sm font-medium font-Karla border border-blue-800 rounded-md hover:bg-blue-100 focus:outline-none focus:bg-blue-100">Login</button>
            <button className="px-6 py-2 bg-blue-800 text-[#FFFFFF] text-sm font-medium font-Karla rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Signup</button>
        </div>
    </div>
</div>

    </>
  )
}

export default NavBar
