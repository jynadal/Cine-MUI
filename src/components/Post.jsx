import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { CollectionsOutlined } from "@material-ui/icons";
//import movies from '../movies'
import React, {useEffect, useState} from 'react'
import  * as movies  from "../Data/movies";

//import * as Data from '../movies'


// data.movies$()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

const useStyles = makeStyles((theme) => ({
  card:{
    marginBottom:theme.spacing(5),
      height: 400,
    width: 200,
  },
  media: {
    height: 250,
    width: 200,
  },

}));

const Post = () => {

  const [films, setFilms] = useState([])

  const response = useEffect(async() => {
    await fetch(movies)
      .then(res=> res.json())
      .then(data => setFilms(data))

    async function getData() {
      const response = await fetch(movies)
      const getResult = await response.json()
      setFilms(getResult)
      console.log(getResult)
    }


getData();
      
  }, [])

  console.log(setFilms)
  const classes = useStyles();
  return (
    <Grid item xs={3}>
       {films.map(film =>(
        
        <Card className={classes.card} key={film.id}>

        </Card>
      ))}





        {/* <CardMedia 
        className={classes.media}
        image= "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/00/02/33/84/aff11.jpg"
        /> */}

        {/* <CardContent>
          <Typography gutterBottom variant="h5">Title</Typography>
          <Typography variant="h6">Genre</Typography>

        </CardContent> */}

        {/* <CardActionArea>
          <CardActions>
            <Button size="small" color="primary" >Share</Button>
            <Button size="small" color="primary" >Learn More</Button>

          </CardActions>

        </CardActionArea> */}

    </Grid>
  );
};

export default Post;


// import { movies$ } from "../Data/movies";

// export default class Movies extends Component {
//     constructor() {
//       this.state = {
//        movies: []
//       }
//     }
//     componentDidMount() {
//        movies$
//        .then(data => this.setState({movies: data}))
//     }
//    //...
// }