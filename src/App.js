import React  from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout } from './redux/actions/user';
import { GuardLogin } from './routes/GuardLogin'

//Styles
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';




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
  
      <div className="App">
        <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>ReactJS | Imagina Formación</h1>
            <button sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? 'dark' : 'ligth'}
            </button>
            {isLogged ? <MenuComponent/> : <LoginComponent  send={setLogin}/>}
            {isLogged ? <button className="clean" onClick={setLogout}>Logout</button> : <span></span>}
            
          </header>
          <div className="App-body">
            <GuardLogin  path="/todo" component={ToDo}/>
            <Route  path="/store" component={Store}/>
            {/* <Route exact path="/register" component={Store}/> */}

            <Route exact path="/about" component={About}/>
            <Route path="/product/:id" component={CardDetailsProductComponent}/>

            {isLogged ?  <Redirect to='/todo'/>  : <Redirect to='/login'/>}
          </div> 

          <footer></footer>
        </Router> 
      </div>
  
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