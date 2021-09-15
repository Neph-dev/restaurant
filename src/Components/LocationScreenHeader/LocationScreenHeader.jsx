import React from 'react';
import "./LocationScreenHeader.css"

function LocationScreenHeader(props) {
    return (
        <div>
            <div className="headerImage"/>
            <h4>
                    <a href="/" style={{color:"#000000", textDecoration:'none', position:'relative'}}>
                        Home
                    </a>
                </h4>
            <div>
                <h1 style={{textAlign: 'center', position:'relative', paddingTop:25, color:'#ffffff'}}>
                    Welcome to Sandton City
                </h1>
            </div>
        </div>
    );
}

export default LocationScreenHeader;