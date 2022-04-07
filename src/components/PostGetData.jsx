import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { CollectionsOutlined, SettingsSystemDaydreamTwoTone } from "@material-ui/icons";
import movies from '../Data/movies'
import React, {useEffect, useState} from 'react'
//import { data } from "../Data/movies";

//import * as Data from './movies'

// data.data()
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


  const [data, setData] = useState([]);


  useEffect( () => {
    getData();
    
  }, []);

  async function getData() {
    const url = `movies`;
    const result = await fetch(url);
    const data = await result.json();
    setData(data);
  }


  //const classes = useStyles();
  console.log(setData);
  return (
    <Grid >
      <h1>hELLO</h1>
      {data.map(film => (
        <div key={  film.id}>{film.title}</div>
      ))}

    </Grid>
  );
};

export default Post;


// import { data } from "../Data/movies";

// export default class Movies extends Component {
//     constructor() {
//       this.state = {
//        movies: []
//       }
//     }
//     componentDidMount() {
//        data
//        .then(data => this.setState({movies: data}))
//     }
//    //...
// }