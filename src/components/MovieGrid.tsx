import React from "react";
import { Typography, Container, Card, CardMedia, CardContent, CardActions, Grid } from "@material-ui/core";

import useStyles from "./MovieGrid.style";
import useStore from "../store/MovieStore"


import MovieDetails from './MovieDetails'


const MovieGrid = () => {
  const classes = useStyles();
  const movies = useStore(state => state.movies)

  return (
    <Container className={classes.cardGrid} maxWidth="md">

    <Grid container spacing={4}>
      {movies.map((movie) => (
        <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={movie.Poster === "N/A" ? "/assets/movie.jpg" : movie.Poster}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.Title}
              </Typography>
              <Typography>
                Year : {movie.Year}
              </Typography>
            </CardContent>
            <CardActions>
              <MovieDetails {...movie} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
  </Container>
  );
};

export default MovieGrid;
