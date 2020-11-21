import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/alert-box'

const LocationMarker = ({ lat, lng, title, onClick }) => {
    return (
        <div className="location-marker" onClick={onclick}>
            <div className="title">{title}</div>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker