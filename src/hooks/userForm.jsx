import { useState } from "react";

export const useForm = (initialForm, validateForm, props) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    // const [loading, setLoading] = useState(false);
    // const [response, setResponse] = useState(null);
    //setForm(initialForm);
    const handleChange = (e) => {
        setErrors(validateForm(form));
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    };
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };
    const handleSubmit = (e) => {
            if (form.valid) {
                form.valid = true;
                e.preventDefault();
                props.send(form);
                setForm(initialForm);
            }
            else{
                e.preventDefault();
                props.send(form);
            }
           
            
    };
    
    return {
        form,
        errors,
        // loading,
        // response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}