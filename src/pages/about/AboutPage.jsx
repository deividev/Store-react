import './AboutPage.scss';

//Styles Material-UI
import Typography from '@mui/material/Typography';


export default function About() {
  return (
    <div className="About">
      <Typography variant="h5" component="div" gutterBottom>
        Todo sobre mi tienda
      </Typography>
    </div>
  );
}