	
import './MessageTable.scss';
//Styles Material-UI
import Container from '@mui/material/Container';
 
export default function MessageTable(props) {
  return (
    <Container >
      <div className="messageTable">
        <div className="flex">
          <button onClick={props.clickEliminar} className="clean">Vaciar Lista</button> 
        </div>
        <table className="messageTable">
          <thead className="header">
            <tr>
              <th>Asunto</th>
              <th>Email</th>
              <th>Mensaje</th>
              <th>Acciones rápidas</th>
            </tr>
          </thead>
          <tbody>
            {props.messages.map(((message, index) => 
              (<tr key={index}
                className={(message.leido ? 'elementRead' : 'elementNoRead')}>
                <td>{message.asunto}</td>
                <td>{message.email}</td>
                <td>{message.mensaje}</td>
                <td>
                <button className="read" title="Marcar como leído"
                  onClick={() => {props.clickCheckRead(index)}}>
                  {(message.leido ? '📖' : '📕')}
                </button>
                  <button className="delete" title="Borrar mensaje"
                  onClick={() => {props.clickEliminarUno(index)}}>🗑</button>
                </td>
              </tr>)
            ))}
          </tbody>
        </table>
      </div>
    </Container>
    
   
  );
}