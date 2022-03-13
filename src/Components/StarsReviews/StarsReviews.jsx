import React from 'react';

import { Reviews, TotalReview } from '../../Data/Reviews';


function StarsReviews({ restaurantID }) {

    if (Reviews[0].rating >= 4.8 && Reviews[0].rating <= 5) {
        return (
            <div style={{ marginTop: 10, display: 'flex' }}>
                <div style={{ fontWeight: 'bold', marginRight: 5 }}>Ratings:</div>
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, marginRight: 5 }} />
                Reviewed By {Reviews.length} people
            </div>
        );
    } else if (Reviews[0].rating >= 3.8 && Reviews[0].rating <= 4.7) {
        return (
            <div style={{ marginTop: 10, display: 'flex' }}>
                <div style={{ fontWeight: 'bold', marginRight: 5 }}>Ratings:</div>
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, marginRight: 5 }} />
                Reviewed By {Reviews.length} people
            </div>
        )
    } else if (Reviews[0].rating >= 2.8 && Reviews[0].rating <= 3.7) {
        return (
            <div style={{ marginTop: 10, display: 'flex' }}>
                <div style={{ fontWeight: 'bold', marginRight: 5 }}>Ratings:</div>
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, marginRight: 5 }} />
                Reviewed By {Reviews.length} people
            </div>)
    } else if (Reviews[0].rating >= 1.8 && Reviews[0].rating <= 2.7) {
        return (
            <div style={{ marginTop: 10, display: 'flex' }}>
                <div style={{ fontWeight: 'bold', marginRight: 5 }}>Ratings:</div>
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, marginRight: 5 }} />
                Reviewed By {Reviews.length} people
            </div>)
    } else if (Reviews[0].rating >= 0.8 && Reviews[0].rating <= 1.7) {
        return (
            <div style={{ marginTop: 10, display: 'flex' }}>
                <div style={{ fontWeight: 'bold', marginRight: 5 }}>Ratings:</div>
                <img alt='' src="https://i.postimg.cc/XqmPkwRW/star-2.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, marginRight: 5 }} />
                Reviewed By {Reviews.length} people
            </div>)
    } else {
        return (
            <div style={{ marginTop: 10, display: 'flex' }}>
                <div style={{ fontWeight: 'bold', marginRight: 5 }}>Ratings:</div>
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} />
                <img alt='' src="https://i.postimg.cc/7hNQ2FqF/1828970.png"
                    style={{ width: 20, height: 20, marginRight: 5 }} />
                Reviewed By {Reviews.length} people
            </div>)
    }
}

export default StarsReviews;