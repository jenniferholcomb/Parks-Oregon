import React from "react";
import logoArt from "./../img/parks-art.png"
import oregonArt from "./../img/oregon-state-parks.png"
import { Link } from "react-router-dom";

function Header () {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-4 bg-lime-900 h-60 p-8 ">
        <div className="col-start-1 col-span-1 flex border-2 items-start gap-7">
        <img className=" h-1/5 scale-125 m2-20"src={logoArt} alt="Logo" />
        <img className=" h-1/5 scale-110 m2-20"src={oregonArt} alt="Logo" />
        <h1 className=" col-span-1 text-slate-50 font-bold antialiased text-xl tracking-wide" >NATIONAL & STATE PARKS<br />of OREGON</h1>
        </div>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
        <div className='col-start-2 col-span-1 text-slate-50 border-2' >API</div>
      </div>
    </React.Fragment>
  );
}

export default Header;