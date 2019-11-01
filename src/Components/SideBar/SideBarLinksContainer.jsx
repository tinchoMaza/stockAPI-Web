import React from 'react'
import SideBarLinks from './SideBarLinks'

export default function SideBarLinksContainer(props) {
    return (
        <div>
            <SideBarLinks active={props.active}/>
        </div>
    )
}
