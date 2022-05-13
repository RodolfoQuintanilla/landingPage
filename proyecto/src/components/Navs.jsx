import React from 'react';

const Navs = () => {
   return (
      <nav className='navbar'>
         <div className="navbar__log">
            Loopstudios
         </div>
         <div className='nav__link'>
            <ul className="nav__list">
               <li className="nav__item"><a href="#"> About</a></li>
               <li className="nav__item"><a href="#">Careers</a></li>
               <li className="nav__item"><a href="#">Events</a></li>
               <li className="nav__item"><a href="#">Support</a></li>






            </ul>
         </div>
      </nav>
   );
};

export default Navs;