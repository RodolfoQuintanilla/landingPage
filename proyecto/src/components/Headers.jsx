import React from 'react';

import img1 from '../img/image-hero.jpg'

const Headers = () => {
   return (
      <header className='header'>

         <nav className='navbar'>

         </nav>

         <figure className='header__figure'>
            <img src={img1} alt="img" className='header__img' />
         </figure>

      </header>
   );
};

export default Headers;