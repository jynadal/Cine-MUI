import React from 'react';
import { makeStyles } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BorderAllIcon from '@material-ui/icons/BorderAll'
import AppsIcon from '@material-ui/icons/Apps'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'

const useStyles = makeStyles({
})

export default function GridView() {
    // const classes = useStyles();
    //const [value, setValue] = React.useState(8);
    const [nbrCard, setNbrCard] = React.useState(8);

    const handleChange = (event) => {
       let Nbr= setNbrCard(event.target.value)
        console.log(Nbr)
    }

    return (
        <BottomNavigation
            value={nbrCard}
            onChange={handleChange}
            showLabels
            
        >
            <BottomNavigationAction label="x 4" value={4} icon={<BorderAllIcon />} />
            <BottomNavigationAction label="x 8" value='8' icon={<AppsIcon />} />
            <BottomNavigationAction label="x 12" value='12' icon={<ViewComfyIcon />} />
        </BottomNavigation>
       



    //<BottomNavigation
    //   value={value}
    // //   onChange={(event, newValue) => {
    // //     setValue(newValue);
    // //   }}
    //     onChange={(event) => setValue(event.target.value)}
    //   showLabels
    // //   className={classes.root}
    // >
    //   <BottomNavigationAction label="x 4" onClick={() => console.log('Click on for X4')} value={4} icon={<BorderAllIcon />} />
    //   <BottomNavigationAction label="x 8"  onClick={() => console.log('Click on for X8')}  value={8} icon={<AppsIcon />} />
    //   <BottomNavigationAction label="x 12"  onClick={() => console.log('Click on for X12')}  value={12} icon={<ViewComfyIcon />} />
    // </BottomNavigation>
    )
}