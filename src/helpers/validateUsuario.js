export const validateForm = (nombre, apellido, email, password) => {
    let isValid = true;
    const newErrors = {
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    };

    if (nombre.trim() === '') {
        newErrors.nombre = 'Ingrese un nombre';
        isValid = false;
    } else if (nombre.length > 25) {
        newErrors.nombre = 'El nombre debe tener máximo 25 caracteres';
        isValid = false;
    }
    if (apellido.trim() === '') {
        newErrors.apellido = 'Ingrese un apellido';
        isValid = false;
    } else if (apellido.length > 20) {
        newErrors.apellido = 'El apellido debe tener máximo 20 caracteres';
        isValid = false;
    }
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
