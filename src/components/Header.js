import React, { useState } from 'react'
import logo from '../assets/hackerrank_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [menu, setMenu] = useState(false)

    return (
        <header>
            <div className='header__top container'>
                <span>Contact Us</span>
                <span>|</span>
                <span>Log in</span>
            </div>
            <nav className='container'>
                <img src={logo} alt='logo' className={menu ? 'open_logo' : ''} />
                <ul>
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
                <div>
                    <span>For Candidates |</span>
                    <button>Request demo</button>
                    <button>Sign up</button>
                </div>
                <div className='menu' onClick={() => setMenu(!menu)}>
                    <FontAwesomeIcon icon={menu ? faX : faBars} />
                </div>

                {menu &&
                    <div className='nav__menu'>
                        <ul>
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Resources</li>
                            <li>Pricing</li>
                            <li>For Candidates</li>
                            <li>Contact Us</li>
                            <li>Log in <FontAwesomeIcon icon={faArrowRight}/> </li>
                            <hr />
                            <li>Request demo</li>
                        </ul>
                        <div className='nav__menu__line'></div>
                    </div> 
                }
            </nav>
        </header>
    )
}

export default Header