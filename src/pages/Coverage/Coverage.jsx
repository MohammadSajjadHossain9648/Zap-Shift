import React, { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Search } from 'lucide-react';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const coverageData = useLoaderData();
    const mapRef = useRef(null);

    const handleToShow = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const districtData = coverageData.find(data => data.district.toLowerCase().includes(location.toLowerCase()));
        if (districtData) {
            const coOrdinate = [districtData.latitude, districtData.longitude];
            mapRef.current.flyTo(coOrdinate, 14);
        }
    }

    return (
        <div className='bg-white rounded-2xl my-5 p-5 md:p-15'>
            <h1 className="title3">We are available in 64 districts</h1>

            <form onSubmit={handleToShow} className="relative flex items-center md:w-3/5 lg:w-2/5 rounded-full bg-body_Bg py-2 px-4 my-10">
                <Search className="text-primary_black" />
                <input type="text" className="outline-0 pl-2 flex-1.5" name="location" placeholder="Search here" />
                <button className="btn active_btn absolute right-0 rounded-full px-5">Search</button>
            </form>

            <p className="title text-2xl my-10">We deliver almost all over Bangladesh</p>
            <MapContainer ref={mapRef} center={[coverageData[0].latitude, coverageData[0].longitude]} zoom={7} scrollWheelZoom={false} className='h-100'>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                {
                    coverageData.map((center, index) => (
                        <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>Region:{center.region} <br />District: {center.district} <br />Covered Area: {center.covered_area.join(', ')}.</Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    );
};

export default Coverage;