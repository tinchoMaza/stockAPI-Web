import React from 'react'
import { Typography } from '@material-ui/core'

export default function Message(props) {

    const styles = {
        color: props.error ? '#F26767': '#2DCB8B',
        textAlign: 'center'
    };

    setTimeout(() => {
        props.reset()
    }, 2000);

    return (
        <div>
            <Typography style={styles}>{props.message}</Typography>
        </div>
    )
}
