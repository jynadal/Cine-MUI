import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from "@material-ui/core";


import * as movies from "./data";

export default function PostCDM() {
  
// Promise.all([movies]).then((values) => {
//   console.log(values)
// })


const dataComp = await Promise.all(movies.map(async (data) => {
  return(
      <Card
      key={data.id}
      title={data.title}
      />
    );
}));

// 2,3,4
  // const dataComp = movies$.map((data) => {
  //   return(
  //     <Card
  //     key={data.id}
  //     title={data.title}
  //     />
  //   );


  //});

    return (
      <div>
        <h1>Hello</h1>
        {dataComp}
        
        {console.log(dataComp)}

      </div>
    );

}

