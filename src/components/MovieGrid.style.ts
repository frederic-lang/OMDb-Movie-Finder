import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    alignContent: 'center'
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  pagination:{
    marginTop: theme.spacing(6),
    marginLeft: "auto",
    marginRight: "auto",
  }
}));

export default useStyles;
