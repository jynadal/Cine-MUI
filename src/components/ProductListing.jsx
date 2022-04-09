import { Container, makeStyles } from "@material-ui/core";
//import Post from "./Post";
// import Post1 from "./PostLatest";
// import Post2 from "./PostGetData";
import Grid from '@material-ui/core/Grid'
import {useSelector} from 'react-redux'
import ProductComponent from "./ProductComponent";
import React, {useEffect} from 'react';
import axios from 'axios';
import {movies} from "../Data/movies"


const useStyles = makeStyles((theme) => ({

}))

const ProductListing = () => {
  const classes = useStyles();
  const products = useSelector((state) => state);

  const fetchProducts = async () => {
    const response = await axios.get(movies).catch((err) => {
      console.log("Err",err)
    });
    console.log(response);
  };
  useEffect(() => {
    fetchProducts();
  },[])
  console.log(products)
  return (
    <Container className={classes.Container}>
      <h1>Product Listing</h1>
      <Grid container spacing={1}>

        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      */}
      <ProductComponent /> 
      </Grid>

    </Container>
  );
};

export default ProductListing;