import { Container, List, makeStyles, Typography} from "@material-ui/core";
import { Bookmark, ExitToApp, Home, Person, PlayCircleOutline, Settings, Storefront, TabletMac } from "@material-ui/icons";
import CategoryIcon from '@material-ui/icons/Category';
import Filter4Icon from '@material-ui/icons/Filter4'
import Filter8Icon from '@material-ui/icons/Filter8'
import AppsIcon from '@material-ui/icons/Apps'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'
//import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import MultiSelect from './MultiSelect'



const useStyles = makeStyles((theme) => ({
  container:{
    height: "100vh",
    color: "white",
    paddingTop:theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignitems:"center",
    marginBottom:theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor:"Pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize:"20px", 
    }
  },
  text: {
    fontWeight: 500,
     [theme.breakpoints.down("sm")]: {
      display:"None",
    },

  },


}))

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <CategoryIcon className={classes.icon}/>
        <Typography className={classes.text}>Accueil</Typography>
      </div>
      <MultiSelect />




      {/* <div className={classes.item}>
        <Person className={classes.icon}/>
        <Typography className={classes.text}>Accueil</Typography>
      </div>

       <div className={classes.item}>
        <Settings className={classes.icon}/>
        <Typography className={classes.text}>Accueil</Typography>
      </div>
       <div className={classes.item}>
        <PlayCircleOutline className={classes.icon}/>
        <Typography className={classes.text}>Accueil</Typography>
      </div>
       <div className={classes.item}>
        <ViewComfyIcon  className={classes.icon}/>
        <Typography className={classes.text}>Accueil</Typography>
      </div>
        <div className={classes.item}>
        <Filter8Icon className={classes.icon}/>
        <Typography className={classes.text}>Accueil</Typography>
      </div>
        <div className={classes.item}>
        <AppsIcon className={classes.icon}/>
        <Typography className={classes.text}>Accueil</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon}/>
        <Typography className={classes.text}>Accueil</Typography>
      </div> */}

    </Container>
    );
};

export default Leftbar;