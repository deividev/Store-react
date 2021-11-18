import { useSelector, useDispatch } from 'react-redux';
import './MessagesContainer.scss';


//Styles Material-UI
import Container from '@mui/material/Container';

//Components
import MessageHeader from '../../pure/forms/MessagesHeader/MessageHeader'; 
import MessageTable from '../MessageTable/MessageTable';
import {
  borrarMensaje, crearMensaje, leerMensaje, vaciarMensajes
} from '../../../redux/actions/message';
// import TaskListComponent from '../../components/container/TaskListComponent';


export default function Messages() {
    //const [messages, setMessages] = useState([]);
    const messages = useSelector(state => state.mensajes);
    const userData = useSelector(state => state.user);
    console.log(userData);
    const dispatch = useDispatch();

    function newMessage(mensaje) {
      let nuevo = {
            "asunto": mensaje.asunto,
            "email": mensaje.email,
            "mensaje": mensaje.mensaje,
            "leido": false
      };
      dispatch(crearMensaje(nuevo));
    };

    let readMessage = (index) => { dispatch(leerMensaje(index))};

    let deleteMessages = () => { dispatch(vaciarMensajes()) };
    
    let deleteMessage = (index) => { dispatch(borrarMensaje(index)) };

    return (
      <Container  maxWidth="xl" sx={{ 
        bgcolor: 'background.default',
        backgroundColor: 'primary.dark',
      }}>
            
          
              <MessageHeader clickNuevo={newMessage}  send={newMessage}>
              </MessageHeader>
              
              <MessageTable messages={messages} clickEliminar={deleteMessages} clickEliminarUno={deleteMessage} clickCheckRead={readMessage}>
              </MessageTable>
        {/* <TaskListComponent></TaskListComponent> */}
      </Container>
    );
  }