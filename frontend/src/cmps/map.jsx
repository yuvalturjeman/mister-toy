import React from "react";
import GoogleMapReact from 'google-map-react';
import { useState } from 'react'
// import { Button } from '@material-ui/core'

function Marker() {
    return <div style={{ height: '1em', width: '1em', borderRadius: '50%', background: 'red' }}></div>
}

export default function SimpleMap() {
    const [center, setCenter] = useState({ lat: 32.794, lng: 34.9896 })
    const zoom = 10
    const branches = [{
        city: 'Haifa',
        id: 101,
        position: {
            lat: 32.794,
            lng: 34.9896
        }
    },
    {
        city: 'Hadera',
        id: 102,
        position: {
            lat: 32.437408,
            lng: 34.925621
        }
    },
    {
        city: 'Tel Aviv',
        id: 103,
        position: {
            lat: 32.085300,
            lng: 34.781769
        }
    },
    ]

    return (
        <div>
            {branches.map(branch => {
                // return <Button key={branch.city} onClick={() => setCenter(branch.position)}>{branch.city}</Button>
            })}
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAzCWDQrlEKflPBZcIs11k28nrUXO6MF_Y" }}
                    defaultCenter={center}
                    center={center}
                    defaultZoom={zoom}
                >
                    {branches.map(branch => {
                        return <Marker lat={branch.position.lat} lng={branch.position.lng} key={branch.id} />
                    })}
                </GoogleMapReact>
            </div>
        </div>
    );
}