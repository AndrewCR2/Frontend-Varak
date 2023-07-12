export const validateForm = (nombre, apellido, id_sede, cargo, turno) => {
    let isValid = true;
    const newErrors = {
        nombre: '',
        apellido: '',
        id_sede: '',
        cargo: '',
        turno: ''

    };

    if (nombre.trim() === '') {
        newErrors.nombre = 'Ingrese un nombre';
        isValid = false;
    } else if (nombre.length > 20) {
        newErrors.nombre = 'El nombre debe tener máximo 10 caracteres';
        isValid = false;
    }
    if (apellido.trim() === '') {
        newErrors.apellido = 'Ingrese un apellido';
        isValid = false;
    } else if (apellido.length > 20) {
        newErrors.apellido = 'El apellido debe tener máximo 20 caracteres';
        isValid = false;
    }
    if (id_sede.length === 0) {
        newErrors.id_sede = 'Ingrese un id_sede';
        isValid = false;
    }
    if (cargo.trim() === '') {
        newErrors.cargo = 'Ingrese un cargo';
        isValid = false;
    } else if (cargo.length > 10) {
        newErrors.cargo = 'El cargo debe tener máximo 15 caracteres';
        isValid = false;
    }
    if (turno.trim() === '') {
        newErrors.turno = 'Ingrese un turno';
        isValid = false;
    } else if (turno.length > 10) {
        newErrors.turno = 'El turno debe tener máximo 10 caracteres';
        isValid = false;
    }

    return {
        isValid: isValid,
        errors: newErrors
    };
};