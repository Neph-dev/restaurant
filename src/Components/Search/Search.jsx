import React from 'react';

function Search() {
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
            <input 
                type="search" 
                placeholder="Type In a Location or a Type Of Food"
                
                style={{ borderRadius: 10, width: '50%', borderWidth: 0, fontSize:20, }}/>
        </div>
    );
}

export default Search;