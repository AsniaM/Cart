import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FiSearch } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div>
        <nav className={styles.navbar}>

        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}> &#9776;</div>
         <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}
         onClick={() => setMenuOpen(false)}>
          <li className={styles.list}><Link to={'/Shop'}>Shop</Link></li>
          <li className={styles.list}><Link to={'/About'}>About</Link></li>
          <li className={styles.list}><Link to={'/Contact' }>Contact</Link></li>
        </ul>

        <h2 className={styles.head}>D. Mitra</h2>

        <div className={styles.right}>
          <FiSearch className={styles.icon} />
          <a href="#" className={styles.login}>Log In</a>
          <div className={styles.cart}>
            <BsCart3 className={styles.icon} />
            </div>
        </div>

        
      </nav>
    </div>
  );
};

export default Navbar;
