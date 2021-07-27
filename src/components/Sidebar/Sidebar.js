import React from "react";
import '../../App.css'
import {sidebarData} from "./SidebarData";

const Sidebar = () => {
    return(
        <div className="App">
            <div className="sidebar">
                <ul>
                    {sidebarData.map((i, key)=>{
                        return(
                            <li key={key}>
                                <div>{i.icon}</div>
                                <div>{i.title}</div>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}
export default Sidebar