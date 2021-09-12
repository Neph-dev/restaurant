import React from 'react';
import './trending.css'

function Trending() {


    return (
        <div>
            <h4 
                style={{textAlign:'center', textDecorationLine:'underline'}}
            >
                Trending Locations
            </h4>

            <div style={{display:'flex'}}>
                <div class="zoom" style={{marginTop:25, marginLeft:"13%"}}>
                    <a href="./location" style={{color:'#ffffff'}}>
                        <img src={'https://i.postimg.cc/7P7ynMjJ/Sandton-City-Sunset-150315-0002-2000.jpg'}
                            style=  {{width:200, height:150, borderRadius:10}}
                        /> 
                        <h4 style={{marginLeft:50, textDecorationLine:'underline', }}>
                            Sandton
                        </h4>
                    </a>
                </div>

                <div class="zoom" style={{marginTop:25, marginLeft:"13%"}}>
                        <img src={'https://i.postimg.cc/zD0KGKX6/Maboneng.jpg'}
                        style=  {{width:200, height:150, borderRadius:10}}
                        />
                        <h4 style={{marginLeft:50, textDecorationLine:'underline'}}>Maboneng</h4>
                </div>  

                <div class="zoom" style={{marginTop:25, marginLeft:"13%"}}>
                        <img src={'https://i.postimg.cc/zXHY0mvj/Montecasino.jpg'}
                        style=  {{width:200, height:150, borderRadius:10}}
                        />
                        <h4 style={{marginLeft:50, textDecorationLine:'underline'}}>Montecasino</h4>
                </div>  
            </div>
        </div>
    );
}

export default Trending;