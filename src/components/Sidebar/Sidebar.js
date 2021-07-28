import React from "react";
import '../../App.css'
import {sidebarData} from "./SidebarData";
import Table from "../Tables/Table"

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
            <div id="table">
                <Table/>
            </div>
        </div>
    )
}
export default Sidebar