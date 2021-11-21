import React  from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { login, logout } from './redux/actions/user';
// import { GuardLogin } from './routes/GuardLogin'

//Styles Material-UI
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import { amber, deepOrange, grey, blue } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Link from '@mui/material/Link';




//Components
// import MenuComponent from './components/container/menu/MenuComponent';
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
    debugger
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
    <Box   sx={{ 
      height: '100%',
      padding: '20px 0',
      bgcolor: 'background.default',
      backgroundColor: 'primary.dark',
    }}>
      <Router>
        {isLogged &&  
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                {/* <MenuIcon /> */}
              </IconButton>
              <Button  color="inherit" component={Link} to="/store">
                  Store
              </Button>
              <Button  color="inherit" component={Link} to="/todo">
                  To-do
              </Button>
              <Button  color="inherit" component={Link} to="/about">
                  About
              </Button>
              <Box   sx={{ 
                display: 'flex',
                justifyContent:'flex-end',
                flexGrow: 1
                }}>
                  {isLogged && <Button sx={{ mr: 2, }} variant="contained"  onClick={colorMode.toggleColorMode}>
                                {theme.palette.mode === 'dark' ? 'dark mode ' : 'light mode'}
                              </Button>
                  }
                {isLogged ? <Button color="error" variant="contained"  className="clean" onClick={setLogout}>Logout</Button> : <span></span>}
                
              </Box>
            </Toolbar>
          </AppBar> 
        }
        <Box >
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Typography variant="h2" component="div" gutterBottom>
                ReactJS | Imagina Formación
              </Typography>
              {isLogged ? <span/> : <LoginComponent  send={setLogin}/>}
          </div>
          <Route exact  path="/todo" component={ToDo}/>
          <Route exact  path="/store" component={Store}/>
          {/* <Route exact path="/register" component={Store}/> */}
          <Route exact path="/about" component={About}/>
          <Route path="/product/:id" component={CardDetailsProductComponent}/>
          {isLogged ?  <Redirect to='/todo'/>  : <Redirect to='/login'/>}

          <footer></footer>
        </Box>
      </Router> 
    </Box>
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