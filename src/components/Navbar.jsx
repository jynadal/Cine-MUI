import { AppBar, Badge, BottomNavigation, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { alpha } from '@material-ui/core/styles';
import BorderAllIcon from '@material-ui/icons/BorderAll'
import AppsIcon from '@material-ui/icons/Apps'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'
import { SettingsOverscanOutlined } from "@material-ui/icons";
import GridView from "./GridView";



const useStyles = makeStyles((theme) => ({
    toolbar: {
        display:"flex",
        justifyContent: "space-between",
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none",
        },
    },
    gridView: {
        display: " flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  borderRadius: theme.shape.borderRadius,
  width: "50%",
  [theme.breakpoints.down("sm")]:{
      display: "none",
  },
    },
    input:{
        color: "white",
        marginleft: theme.spacing(2)
    },
    icons: {
        display:"flex",
        alignItems: "center"
    },
    badge: {
       marginRight: theme.spacing(2),     
    }
}))

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
        <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
    Cine M UI
        </Typography>
        {/* <div className={classes.search}>
            {/* <Search />
            <InputBase placeholder="Search ..." className={classes.input}/>
        </div> */}
        <GridView className={classes.gridView} />

        {/* <div className={classes.icons}>
            <Badge badgeContent='x4' color="secondary" className={classes.badge}>
                <BorderAllIcon  />
            </Badge>
            <Badge badgeContent='x8' color="secondary" className={classes.badge}>
                <AppsIcon color="action"/>
            </Badge>
             <Badge badgeContent='x12' color="secondary" className={classes.badge}>
                <ViewComfyIcon  />
            </Badge>
        </div>   */}

        {/* <BottomNavigation 
            showLabels
            value={value}
            onChange={(event, newValue) => {
                set(newValue);
            }}
            >
            <BottomNavigationAction icon={  
                <Badge badgeContent='x4' color="secondary" className={classes.badge}>
                    <BorderAllIcon  />
                </Badge>
            } />
            <BottomNavigationAction icon={
                 <Badge badgeContent='x8' color="secondary" className={classes.badge}>
                    <AppsIcon color="action"/>
                </Badge>
            } />
            <BottomNavigationAction icon={
                <Badge badgeContent='x12' color="secondary" className={classes.badge}>
                    <ViewComfyIcon  />
                </Badge>
            } />

        </BottomNavigation> */}

        </Toolbar>
    </AppBar>
  );
};

export default Navbar;