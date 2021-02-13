import React from 'react'
import "./UnderLineHeading.scss"

export default function UnderlineHeading({Title}) {
    return (
        <>
            <div className="col-12 UnderLineHeading">
                <div className="UnderLine-Top" ></div>
                <h1>{Title}</h1>
                <div className="UnderLine-Bottom" ></div>
            </div>
        </>
    )
}
