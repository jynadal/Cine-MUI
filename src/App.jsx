import { Button, Grid, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import Leftbar from "./components/Leftbar";
import  Navbar from "./components/Navbar";
//import  Feed from "./components/Feed"; Replace by ProductListing
import  ProductListing from "./components/ProductListing";
import  ProductComponent from "./components/ProductComponent2";
import  ProductDetail from "./components/ProductDetail";




import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


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
      <Router>
        <Navbar />
        {/*
        <Leftbar />
         <Routes>
          <Route path="/" exact component={ProductListing} />
          <Route path="product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Routes>
           */}
          <Grid container>
            <Grid item sm={2} xs={2}><Leftbar /></Grid>
             <Grid item sm={10} xs={10}><ProductListing /></Grid> 
          </Grid>
          
      </Router>
    </div>
  );
};

export default App;