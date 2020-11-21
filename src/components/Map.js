import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({id:ev.id, title:ev.title})} title="Wildfire"/>
        }
        if(ev.categories[0].id === 10) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({id:ev.id, title:ev.title})} title="Severe Storm"/>
        }
        if(ev.categories[0].id === 15) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({id:ev.id, title:ev.title})} title="Sea and Lake ice"/>
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={ center } defaultZoom={ zoom }>
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 6.524178712135704,
        lng: 3.3347713163975086
    },
    zoom: 2
}

export default Map
