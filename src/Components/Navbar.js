
// import React from 'react'
// import './Navbar.css'

// function Navbar() {
//   return (
//     <header>
//         <nav className='navbar'> 
//             <div><h3 className='author'>Saransh.dev</h3></div>
//             <div>
//                 <ul className='list'>
//                     <a className='nav--links'><li className='items'>Home</li></a>
//                     <a className='nav--links'><li className='items'>About</li></a>
//                     <a className='nav--links'><li className='items'>Projects</li></a>
//                     <a className='nav--links'><li className='items'>Contact</li></a>
//                 </ul>
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Navbar



import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
//     <nav class="navbar">
//     <div class="logo">Saransh.dev</div>

   
//     <ul class="nav-links">
//       <input type="checkbox" id="checkbox_toggle" />
//       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
//       <div class="menu">

//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>

//         <li class="projects">
//           <a href="#projects">Projects</a>

//           <ul class="dropdown">
//             <li><a href="/">Netflix Clone</a></li>
//             <li><a href="/">Grocery Store</a></li>
//             <li><a href="/">Meme Generator</a></li>
//             <li><a href="/">Weather Scraper</a></li>

//           </ul>

//         </li>

//         <li><a href="#contact">Contact</a></li>
//         <li><a href="#contact">Contact</a></li>

//       </div>
//     </ul>
//   </nav>














<nav class="navbar">
   
    <div class="logo">Saransh.dev</div>

    
    <ul class="nav-links">

      
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>


      <div class="menu">

        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>

        <li class="services">
          <a href="#projects">Projects</a>
          <ul class="dropdown">
            <li><a href="#netflix">Netflix Clone </a></li>
            <li><a href="#grocery">Grocery Store</a></li>
            <li><a href="#meme">Meme Generator</a></li>
            <li><a href="#weather">Weather Scraper</a></li>
            {/* <li><a href="/">Dropdown 4</a></li> */}
          </ul>

        </li>

        {/* <li><a href="/">Pricing</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </div>
    </ul>
  </nav>
  )
}

export default Navbar