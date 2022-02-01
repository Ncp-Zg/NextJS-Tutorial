import Link from 'next/link';
import React from 'react';
import styles from "../styles/Nav.module.css"

const Nav = () => {
  return(
       <div>
           <nav className={styles.nav}>
               <ul>
                   <li>
                       <Link href="/"><a>Home</a></Link>
                   </li>
                   <li>
                   <Link href="/about"><a>About</a></Link>
                   </li>
               </ul>
           </nav>
       </div>
       );
};

export default Nav;
