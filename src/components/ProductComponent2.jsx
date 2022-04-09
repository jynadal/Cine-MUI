import { Container, makeStyles } from "@material-ui/core";
//import Post from "./Post";
// import Post1 from "./PostLatest";
// import Post2 from "./PostGetData";
import Grid from '@material-ui/core/Grid'
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({

}))

const ProductComponent = () => {
  const classes = useStyles();
  const products = useSelector((state) => state);
  return (
    <Container className={classes.Container}>
      <h1>Product Component</h1>
      <Grid container spacing={1}>

      </Grid>

    </Container>
  );
};

export default ProductComponent;