import React from "react";
import logoArt from "./../img/parks-art.png"
import oregonArt from "./../img/oregon-state-parks.png"

function Header () {
  return (
    <React.Fragment>
      <div className="grid grid-cols-6 bg-lime-900 h-60">
        <div className="flex items-center justify-end"> 
          <img className=" h-52"src={logoArt} alt="Logo" />
        </div>
        <div className="flex items-center justify-center">
          <img className="h-48"src={oregonArt} alt="Logo" />
        </div>
        <div className="col-span-2 pt-6">
          <h1 className="text-slate-50 font-bold antialiased text-xl tracking-wide" >NATIONAL & STATE PARKS<br />of OREGON</h1>
        </div>
        <div className='flex items-end justify-end col-span-2 p-6 mr-12' >
          <div className="text-slate-50 font-bold text-4xl">API</div>
        </div>
      </div>
    </React.Fragment>
  );
}
// 
export default Header;

