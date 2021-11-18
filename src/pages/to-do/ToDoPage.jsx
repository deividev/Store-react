import './ToDoPage.scss';
import Messages from '../../components/container/Message/MessagesContainer';


//Styles Material-UI
import Container from '@mui/material/Container';


export default function Store(props) {
  return (
    <Container  maxWidth="xl" sx={{ 
      bgcolor: 'background.default',
      backgroundColor: 'primary.dark',
    }}>
      <h1 className="title">Bienvenido a tu list To-Do</h1>
      <Messages></Messages>
   
    </Container>
  );
}