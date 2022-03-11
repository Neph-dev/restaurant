import React from 'react';

function StarsReviews({ avgRatings, numOfRatings }) {

    if (avgRatings >= 4.8 && avgRatings <= 5) {
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
                Reviewed By {numOfRatings} people
            </div>
        );
    } else if (avgRatings >= 3.8 && avgRatings <= 4.7) {
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
                Reviewed By {numOfRatings} people
            </div>
        )
    } else if (avgRatings >= 2.8 && avgRatings <= 3.7) {
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
                Reviewed By {numOfRatings} people
            </div>)
    } else if (avgRatings >= 1.8 && avgRatings <= 2.7) {
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
                Reviewed By {numOfRatings} people
            </div>)
    } else if (avgRatings >= 0.8 && avgRatings <= 1.7) {
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
                Reviewed By {numOfRatings} people
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
                Reviewed By {numOfRatings} people
            </div>)
    }
}

export default StarsReviews;