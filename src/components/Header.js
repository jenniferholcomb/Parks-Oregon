import React from "react";
import logoArt from "./../img/parks-art.png"
import oregonArt from "./../img/oregon-state-parks.png"

function Header () {
  return (
    <React.Fragment>
      <div className="flex bg-lime-900 h-60 min-h-full p-8 gap-x-4">
        <img className="w-40 m2-20"src={logoArt} alt="Logo" />
        <img className="w-40 m2-20"src={oregonArt} alt="Logo" />
        <h1 className="text-slate-50 font-bold antialiased text-2xl tracking-wide" >NATIONAL & STATE PARKS<br />of OREGON</h1>
        <h3>API</h3>
      </div>
    </React.Fragment>
  );
}

export default Header;