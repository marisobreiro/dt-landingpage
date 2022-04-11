import React from "react";

import './List.css'

function List ({title, link1, link2, link3, link4, link5}) {
    return (
        <div className="m-5">
            <h6>{title}</h6>
            <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent border-0 font-size">{link1}</li>
                <li className="list-group-item bg-transparent border-0 font-size">{link2}</li>
                <li className="list-group-item bg-transparent border-0 font-size">{link3}</li>
                <li className="list-group-item bg-transparent border-0 font-size">{link4}</li>
                <li className="list-group-item bg-transparent border-0 font-size">{link5}</li>
            </ul>
        </div>
    )
}

export default List;