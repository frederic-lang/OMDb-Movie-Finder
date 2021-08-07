import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import axios from "axios";
import { Grid } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({
  imdbID,
  Poster,
  Title,
  Year,
}: {
  imdbID: any;
  Poster: any;
  Title: any;
  Year: any;
}) {
  const [open, setOpen] = React.useState(false);
  const [movieDetails, setMovieDetails] = React.useState({Director: null, Plot:null})

  const handleClickOpen = async () => {
    setOpen(true);
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "9ddde0b3",
        i: imdbID,
      },
    });
    //console.log(response.data);
    setMovieDetails({Director: response.data?.Director, Plot: response.data?.Plot})
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {Title}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item>
              <Container maxWidth="sm">
                <img
                  src={Poster === "N/A" ? "/assets/movie.jpg" : Poster}
                  alt="Poster"
                />
              </Container>
            </Grid>
            <Grid item>
                { movieDetails.Director &&
              <Typography gutterBottom>
                Director : {movieDetails.Director}
              </Typography>
                }
                { movieDetails.Plot &&
              <Typography gutterBottom>
                Plot : {movieDetails.Plot}
              </Typography>
                }
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
