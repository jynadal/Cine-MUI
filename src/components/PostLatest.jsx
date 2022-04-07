import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { CollectionsOutlined } from "@material-ui/icons";
import movies from '../Data/movies'
import React, {useEffect, useState} from 'react'
//import { movies$ } from "../Data/movies";

//import * as Data from './data'

// data.movies$()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// const useStyles = makeStyles((theme) => ({
//   card:{
//     marginBottom:theme.spacing(5),
//       height: 400,
//     width: 200,
//   },
//   media: {
//     height: 250,
//     width: 200,
//   },

// }));

function Post() {


  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect( () => {
    (async()=> {
      const response = await fetch(movies);
      const responseData = await response.json();

      if (response.ok) {
        setMovies(responseData)
      } else {
        console.log(JSON.stringify(responseData))
      }
      setLoading(false)
    })()
    
  }, []);

if (loading) {
  return "Chargement en cours ......"
}


  //const classes = useStyles();
  console.log(setMovies);
  const filmCard = movies.map(film => <li key={film.id}>{film.title}</li>)
  return <ul>{filmCard}</ul>;
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