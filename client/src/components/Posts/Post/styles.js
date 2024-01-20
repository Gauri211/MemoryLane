import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '200px',
    margin: '25% 5% 0',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    // backgroundColor: '#27282c',
    // width: '300px'
  },
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '20px',
  },
  overlay2: {
    position: 'absolute',
    top: '15px',
    right: '5px',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px 20px',
  },
  title: {
    padding: '0 16px',
    fontSize: '18px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});