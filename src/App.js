import React  from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout } from './redux/actions/user';
import { GuardLogin } from './routes/GuardLogin'

//Styles Material-UI
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import { amber, deepOrange, grey, blue } from '@mui/material/colors';
import Button from '@mui/material/Button';




//Components
import MenuComponent from './components/container/menu/MenuComponent';
import LoginComponent from'./components/pure/forms/Login/LoginComponent';
import CardDetailsProductComponent from './components/pure/CardDetailsProductComponent/CardDetailsProductComponent';

//Pages
import About from './pages/about/AboutPage';
import Store from './pages/store/StorePage';
import ToDo from './pages/to-do/ToDoPage';
import './App.scss';
import logo from './logo.svg';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



function App() {

  const dispatch = useDispatch();
  const [isLogged, setLogged] = useState(false);

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);




  


  function setLogin(user) {
    if (user.valid) {
      if(!localStorage.getItem(user.email) && !user.isLogin){ 
        let userLogin = {
          email: user.email,
          password: user.password,
          isLogin: true
        };
        localStorage.setItem(user.email, JSON.stringify(userLogin))
        dispatch(login(userLogin));
        setLogged(true);
      } else if (!user.isLogin){
        let userLogin = {
          email: user.email,
          password: user.password,
          isLogin: true
        };
        localStorage.setItem(user.email, JSON.stringify(userLogin))
        dispatch(login(userLogin));
        setLogged(true);
      }
    }
  };

  let setLogout = () => {
    dispatch(logout());
    setLogged(false);
  }
  
  

  return (
    <Container  maxWidth="xxl" sx={{ 
      bgcolor: 'background.default',
      height: '100vh',
      width: '100%',
      backgroundColor: 'primary.dark',
    }}>
        <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>ReactJS | Imagina Formación</h1>
            <Button variant="contained"  onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? 'ligth mode ' : 'dark mode'}
            </Button>
            {isLogged ? <MenuComponent/> : <LoginComponent  send={setLogin}/>}
            {isLogged ? <Button variant="contained"  className="clean" onClick={setLogout}>Logout</Button> : <span></span>}
            
          </header>
            <GuardLogin  path="/todo" component={ToDo}/>
            <Route  path="/store" component={Store}/>
            {/* <Route exact path="/register" component={Store}/> */}

            <Route exact path="/about" component={About}/>
            <Route path="/product/:id" component={CardDetailsProductComponent}/>

            {isLogged ?  <Redirect to='/todo'/>  : <Redirect to='/login'/>}

          <footer></footer>
        </Router> 
    </Container>
     
  
  );
}



export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}