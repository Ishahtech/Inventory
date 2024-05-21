

import stockace from '../assets/logo/stockace.svg';

function NavBar() {
  return (
    <div className="w-full h-24 px-4 md:px-14 py-10 bg-[#FAFAFF] flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <img className="w-12 h-11 relative" src={stockace} alt="Logo" />
        </div>
        <div className="ml-4 text-zinc-800 text-2xl font-medium font-Karla">StockAce</div>
      </div>
      <div className="hidden md:flex items-center space-x-8 lg:space-x-36">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <a href="#" className="px-2 lg:px-4 py-2 text-blue-800 text-sm lg:text-xl font-medium font-Karla hover:text-blue-600 focus:outline-none focus:text-blue-600">Home</a>
          <a href="#" className="px-2 lg:px-4 py-2 text-zinc-800 text-sm lg:text-xl font-medium font-Karla hover:text-blue-600 focus:outline-none focus:text-blue-600">Features</a>
          <a href="#" className="px-2 lg:px-4 py-2 text-zinc-800 text-sm lg:text-xl font-medium font-Karla hover:text-blue-600 focus:outline-none focus:text-blue-600">About us</a>
          <a href="#" className="px-2 lg:px-4 py-2 text-zinc-800 text-sm lg:text-xl font-medium font-Karla hover:text-blue-600 focus:outline-none focus:text-blue-600">Help</a>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-8">
          <button className="px-4 lg:px-6 py-2 text-blue-800 text-sm font-medium font-Karla border border-blue-800 rounded-md hover:bg-blue-100 focus:outline-none focus:bg-blue-100">Login</button>
          <button className="px-4 lg:px-6 py-2 bg-blue-800 text-white text-sm font-medium font-Karla rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Signup</button>
        </div>
      </div>
      <div className="md:hidden">
        {/* Mobile menu button */}
        <button className="text-zinc-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
