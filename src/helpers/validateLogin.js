export const validateForm = (email, password) => {
    let isValid = true;
    const newErrors = {
        email: '',
        password: ''
    };


    if (email.trim() === '') {
        newErrors.email = 'Ingrese un email';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Ingrese un email válido';
        isValid = false;
    }
    if (password.trim() === '') {
        newErrors.password = 'Ingrese una contraseña';
        isValid = false;
    } else if (password.length < 8) {
        newErrors.password = 'La contraseña debe tener 8 caracteres minimo';
        isValid = false;
    }

    return {
        isValid: isValid,
        errors: newErrors
    };
};
