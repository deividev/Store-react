import { render, screen, fireEvent } from '@testing-library/react'; 
import LoginComponent from './LoginComponent';

import '@testing-library/jest-dom/extend-expect';
//Component Material-UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


//jest.mock('../../../../hooks/userForm.jsx');
// useForm(initialForm, validationsForm, props)
let logged;
function setLogin(user) {
    console.log('PAco');
    if (user.valid) {
      if(!localStorage.getItem(user.email) && !user.isLogin){ 
        let userLogin = {
          email: user.email,
          password: user.password,
          isLogin: true
        };
        localStorage.setItem(user.email, JSON.stringify(userLogin))
        logged= true;
      } else if (!user.isLogin){
        let userLogin = {
          email: user.email,
          password: user.password,
          isLogin: true
        };
        localStorage.setItem(user.email, JSON.stringify(userLogin))
        logged = true ;
      }
    }
  };
describe( LoginComponent, () => {
    const component = render(<LoginComponent send={setLogin} />);
    test('Se renderizan el formulario ', () => {
        const email = render(<TextField id="email" />);
        const password = render(<TextField id="password" />);
        const submit = render(<Button type="submit"/>);

        email.getByText('Email');
        password.getByText('Password');
        submit.getByText('Login');
        screen.debug();
    });


    

    expect(component.container).toHaveTextContent('Login')
    const mockHanler = jest.fn();

    test('Mandar el formulario una vez terminado ', () => {
        const componentLogin = render(<LoginComponent send={mockHanler} />);
        const submit = componentLogin.getByText('Login');
        fireEvent.click(submit);
        expect(mockHanler).toHaveBeenCalledTimes(1);
    });

});

