import React from 'react';
import "./Styles.css"

import StarsReviews from '../StarsReviews/StarsReviews';


function RestaurantsList(props) {

    const id = props.value.id
    const name = props.value.name
    const address = props.value.address
    const image = props.value.image
    const numOfRatings = props.value.numOfRatings
    const avgRatings = props.value.avgRatings
    const contacts = props.value.contacts

    return (
        <div>
            <div style={{display:'flex', backgroundColor:'#DCE0DF', marginTop:10}}>
            
                <img src={image} 
                    style={{width:250, height:205}}/>

                <div style={{margin:10}}>
                    <h3 style={{color:'#000000'}}>{name}</h3>

                    <div style={{display:'flex', marginBottom:0}}>
                        <div style={{fontWeight:"bold", marginRight:5}}>Address: </div>
                        <div>{address}</div>
                    </div>

                    <div style={{display:'flex'}}>
                        <div style={{fontWeight:"bold", marginRight:5}}>Operating Hours: </div>
                        <div style={{display:'flex'}}><div style={{fontWeight:"bold", marginRight:5}}>Monday to Saturday:</div> 12pm - 10pm</div>
                        <div style={{display:'flex', marginLeft:5}}> & <div style={{fontWeight:"bold", marginLeft:5}}>Sunday:</div> 
                            <div style={{marginLeft:5}}>Closed</div>
                        </div>
                    </div>

                    <div style={{fontWeight:"bold", display:'flex'}}>Status: 
                        <div style={{color:'green', marginLeft:5}}>Open</div>
                    </div>
                    <div style={{fontWeight:"bold", display:'flex'}}>Contact(s): 
                        <div style={{marginLeft:5}}>{contacts}</div>
                    </div>

                    <div style={{display:'flex'}}>
                        {/* Number of stars components */}
                        <StarsReviews avgRatings={avgRatings} numOfRatings={numOfRatings}/>

                        <div style={{ display:'flex', justifyContent:'center', marginLeft:"20%" }}>
                            <button 
                                style={{
                                    marginRight:"-15%", 
                                    position:'absolute', 
                                    borderRadius: 10, 
                                    color:'#ffffff',
                                    backgroundColor:'#15273F', 
                                    borderWidth:0,
                                    padding:10
                                }}>
                                    View Menu
                            </button>
                            <button 
                                style={{
                                    position:'absolute', 
                                    marginRight:"3%", 
                                    borderRadius: 10, 
                                    color:'#ffffff',
                                    backgroundColor:'#2B3D5B', 
                                    borderWidth:0,
                                    padding:10
                                }}>
                                    Gallery
                            </button>
                            <button 
                                style={{
                                    position:'absolute', 
                                    marginRight:"-33%",
                                    borderRadius: 10, 
                                    color:'#ffffff',
                                    backgroundColor:'#15273F', 
                                    borderWidth:0,
                                    padding:10
                                }}
                            >
                                Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RestaurantsList;