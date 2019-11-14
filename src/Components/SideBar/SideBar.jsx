import React from 'react'
import SideBarLinksContainer from './SideBarLinksContainer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    sideBar : props => ({
        transition: '0.25s width',
        position: 'fixed',
        width: props.visible? 200: 0,
        backgroundColor: '#D9D9D9',
        height: 'calc(100vh - 64px)',
    })
}))

export default function SideBar(props) {
    const classes = useStyles(props)

    return (
        <div className={classes.sideBar} >
            { props.visible && <SideBarLinksContainer/> }
        </div>
    )
}
       