import React, {useState} from "react";
import {BrowserRouter, Link} from "react-router-dom"
import Dropdown from "./VendorDropdown";
import './Navbar.css'
import CnbDropdown from "./CnbDropdown";
import Shopify from "./Vendors/Shopify";

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [cnbDropdown, setCnbDropdown] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    const onMouseEnter = () => {
        if(window.innerWidth<960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseEnter1 = () => {
        if(window.innerWidth<960){
            setCnbDropdown(false)
        }else{
            setCnbDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth<960){
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }
    const onMouseLeave1 = () => {
        if(window.innerWidth<960){
            setCnbDropdown(false)
        }else{
            setCnbDropdown(false)
        }
    }
    return(
        <div>
            <BrowserRouter>
                <nav className="navbar">
                    <Link to="/" className="navbar-logo">
                        CNB-NET
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link to="/vendors" className="nav-links" onClick={closeMenu}>
                                Vendors <i className="fas fa-caret-down"/>
                            </Link>
                            {dropdown && <Dropdown/>}
                        </li>
                        <li className='nav-item'  onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
                            <Link to="/cnbServices" className="nav-links" onClick={closeMenu}>
                                CNB <i className="fas fa-caret-down"/>
                            </Link>
                            {cnbDropdown && <CnbDropdown/>}
                        </li>
                    </ul>
                </nav>
            </BrowserRouter>
        </div>
    )
}
export default Navbar
