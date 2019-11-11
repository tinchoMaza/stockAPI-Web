import React from 'react'

export default function SideBarItem() {
    return (
        <div>
            <Link className={classes.link} to={props.link}> 
                <ListItem button onClick={() => setShowSubcategories(!showSubcategories)} key={props.label} className={classes.item}>
                    <ListItemIcon>{iconSelector(props.label)}</ListItemIcon>
                    <ListItemText primary={props.label} />
                </ListItem>
            </Link>
        </div>
    )
}
