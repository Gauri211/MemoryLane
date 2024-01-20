import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    height: '400px',
  },
  card: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column', // Always use column for smaller screens
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row', // Use row for screens larger than or equal to 'sm'
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    width: '100%', // Take full width on smaller screens
    [theme.breakpoints.up('sm')]: {
      flex: '60%', // Occupy 60% of the width on larger screens
    },
  },
  imageSection: {
    margin: '20px 0', // Adjust margin for smaller screens
    width: '100%', // Take full width on smaller screens
    [theme.breakpoints.up('sm')]: {
      marginLeft: '20px',
      flex: '40%', // Occupy 40% of the width on larger screens
    },
  },
  recommendedPosts: {
    display: 'flex',
    flexDirection: 'column', // Always use column for smaller screens
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row', // Use row for screens larger than or equal to 'sm'
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    flexDirection: 'column', // Always use column for smaller screens
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row', // Use row for screens larger than or equal to 'sm'
    },
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0', // Adjust margin for smaller screens
    },
  },
}));
