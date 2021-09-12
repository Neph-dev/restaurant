import React from 'react';
import Clock from '../../Clock/Clock';
import Search from '../../Search/Search';
import Trending from '../../Trending/Trending';
import './Header.css'

function Header() {
    return (
        <div className='Header'>
            {/* <div style={{position:'absolute', margin: 10, right:0, color: "#000000"}}>
                <Clock/>
            </div> */}
            <div style={{marginTop: "10%",}}>
                <h1
                    style={{
                        textAlign:'center',
                        fontSize:70
                    }}
                >
                    Welcome To Restaurants
                </h1>
            </div>
            
            <div>
                <h4 
                    style={{
                        textAlign:'center'
                    }}
                >
                    Find a restaurant based on the location or the type of food you'd like 
                </h4>
            </div>
            <div style={{ margin: 50, }}>
                <Search />
            </div>
            <div>
                <Trending/>
            </div>
        </div>
    );
}

export default Header;