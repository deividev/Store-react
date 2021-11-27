import React from 'react';
import { useForm } from '../../../../hooks/userForm';
import {  Link } from 'react-router-dom';

//Component Material-UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//Styles
import './LoginComponent.scss';

const LoginComponent = (props, send) => {
    // const history = useHistory();

    //Variables
    const initialForm = {
        email: '',
        password: '',
        isLogin: false
    };
    const validationsForm = (form) => {
        let errors = {};
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        
        
        if(!form.email.trim()) {
            errors.email = 'El asunto es obligatorio';
            errors.emailValid = true;
        }
        else if (!regexEmail.test(form.email.trim())) {
            errors.email = 'El email solo acepta formato email';
            errors.emailValid = true;
        }
        if (form.email && !errors.emailValid) {
            errors.emailValid = false;
        }
        if(!form.password.trim()) {
            errors.password = 'La password es obligatoria';
            errors.passwordValid = true;
        }
        else if (form.password.length < 5) {
            errors.password = 'La password minimo tiene que contener 5 characteres';
            errors.passwordValid = true;
        }
        if (form.password && !errors.passwordValid) {
            errors.passwordValid = false;
        }
        if (!errors) {
            form.valid = false;
        }else { form.valid = true; }
        return errors;
    };

    // const redirectToTask = () => {
    //     history.push({
    //         pathname: '/task',
    //     })
    // }


    const {
        form,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
      } = useForm(initialForm, validationsForm, props);

        return (
            <div className="messageHeader">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__control">
                        <TextField 
                            error={errors.emailValid}
                            helperText={errors.email}
                            label="Email" 
                            variant="outlined"
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            value={form.email} 
                            type="email" 
                            required
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className="form__control">
                        <TextField 
                            error={errors.passwordValid}
                            helperText={errors.password}
                            label="Password" 
                            variant="outlined"
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            value={form.password}  
                            type="password" 
                            required
                            name="password"
                            id="password"
                        />
                    </div>
                    {/* TODO crear pagina para register */}
                    {/* <Link className="resgiter-link" to='/register'>   
                    Registrate si no lo has hecho aun!
                    </Link> */}
                    <Button  type="submit" color="success" variant="contained">Login</Button>
                </form>
            </div>
        );
}

export default LoginComponent;