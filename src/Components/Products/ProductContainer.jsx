import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    row: {

    },
}))

export default function ProductContainer(props) {
    const classes = useStyles(props)
    const product = props.content

    return (
        <div className={classes.row}>
            <div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
            </div>
        </div>
    )
}
