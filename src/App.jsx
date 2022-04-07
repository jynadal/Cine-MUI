import { Button, Grid, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import Leftbar from "./components/Leftbar";
import  Navbar from "./components/Navbar";
import  Feed from "./components/Feed";


const useStyles = makeStyles((theme) => ({
  // right: {
  //   [theme.breakpoints.down("sm")]:{
  // display: "None"
  //   }
  // },

}))

const App = () => {
  const classes = useStyles();
  return (
    <div>
    <Navbar />
    <Grid container>
      <Grid item sm={2} xs={2}><Leftbar /></Grid>
      <Grid item sm={10} xs={10}><Feed /></Grid>
    </Grid>

    </div>
  );
};

export default App;