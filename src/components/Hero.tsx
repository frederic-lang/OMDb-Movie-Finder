import React from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import useStyles from "./Hero.style";
import useStore from "../store/MovieStore";
import InvalidRequest from "./InvalidRequest";
import NoResults from "./NoResults";

const Hero = () => {
  const classes = useStyles();
  const search = useStore((state) => state.search);
  const [title, setTitle] = React.useState("");
  const [type, setType] = React.useState("movie")
  const [openModalEmpty, setOpenModalEmpty] = React.useState(false);
  const [openModalNoR, setOpenModalNoR] = React.useState(false);
  const handleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const handleTypeChange = (event: any) => {
    setType(event.target.value);
    console.log("type", event.target.value)
  };

  const responseSuccess = useStore(state => state.responseSuccess)

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Movie Finder
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <form
          className={classes.heroButtons}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit")
            if(title==="") setOpenModalEmpty(true);
            else setOpenModalNoR(true);
            search(title, type);
          }}
        >
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <TextField
                id="filled-basic"
                label="Movie Title"
                variant="filled"
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  onChange={handleTypeChange}
                  variant="standard">
                  <MenuItem value={"movie"}>Movie</MenuItem>
                  <MenuItem value={"series"}>Serie</MenuItem>
                  {/* <MenuItem value={"episode"}>Episode</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      {openModalEmpty &&
      <InvalidRequest setOpenModal={setOpenModalEmpty} openModal={openModalEmpty}/>
      }
      {responseSuccess===false && openModalNoR &&
      <NoResults setOpenModal={setOpenModalNoR} openModal={openModalNoR}/>
      }
    </div>
  );
};

export default Hero;
