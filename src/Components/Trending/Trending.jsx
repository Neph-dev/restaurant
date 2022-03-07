import React from 'react';
import './trending.css'

function Trending() {


    return (
        <div>
            <h4 className="locations-main-title" >
                Locations
            </h4>

            <div className='locations-list-container'>
                <div className="locations-element">
                    <a href="./location" style={{ color: '#ffffff' }}>
                        <img
                            src={'https://i.postimg.cc/7P7ynMjJ/Sandton-City-Sunset-150315-0002-2000.jpg'}
                            className='location-image'
                            alt='' />
                        <h4 className='location-name'>
                            Sandton
                        </h4>
                    </a>
                </div>

                <div className="locations-element">
                    <img
                        src={'https://i.postimg.cc/zD0KGKX6/Maboneng.jpg'}
                        className='location-image'
                        alt='' />
                    <h4 className='location-name'>Maboneng</h4>
                </div>

                <div className="locations-element">
                    <img
                        src={'https://i.postimg.cc/zXHY0mvj/Montecasino.jpg'}
                        className='location-image'
                        alt='' />
                    <h4 className='location-name'>Montecasino</h4>
                </div>
            </div>
        </div>
    );
}

export default Trending;