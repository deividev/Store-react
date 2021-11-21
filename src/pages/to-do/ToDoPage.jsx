import './ToDoPage.scss';
import Messages from '../../components/container/Message/MessagesContainer';


//Styles Material-UI
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';




export default function Store(props) {
  return (
    <Box  sx={{ width: '100%' }}>
      <Typography variant="h5" component="div" gutterBottom>
        Bienvenido a tu list To-Do
      </Typography>
      <Messages></Messages>
    </Box>
  );
}