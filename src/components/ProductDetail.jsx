import { Container, makeStyles } from "@material-ui/core";
//import Post from "./Post";
// import Post1 from "./PostLatest";
// import Post2 from "./PostGetData";
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({

}))

const ProductDetail = () => {
  const classes = useStyles();
  return (
    <Container className={classes.Container}>
      <h1>Product Detail</h1>
      <Grid container spacing={1}>

        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> 
      */}

      </Grid>

    </Container>
  );
};

export default ProductDetail;