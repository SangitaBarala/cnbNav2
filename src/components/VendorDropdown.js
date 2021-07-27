import React, { useState } from 'react';
import {VendorItems} from './VendorsItems'
import './NavDropdownCss.css';
import {Link} from "react-router-dom";
import Amazon from "./Vendors/Amazon";

function Dropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {VendorItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href=""
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick}
                            >
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;