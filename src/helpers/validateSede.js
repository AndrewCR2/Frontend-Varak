export const validateForm = (nombre, direccion, id_personal) => {
    let isValid = true;
    const newErrors = {
        nombre: '',
        direccion: '',
        id_personal: ''
    };

    if (nombre.trim() === '') {
        newErrors.nombre = 'Ingrese un nombre';
        isValid = false;
    } else if (nombre.length > 10) {
        newErrors.nombre = 'El nombre debe tener max 20 caracteres';
        isValid = false;
    }
    if (id_personal.length === 0) {
        newErrors.id_personal = 'Ingrese un Id';
        isValid = false;
    }
    if (direccion.trim() === '') {
        newErrors.direccion = 'Ingrese un turno';
        isValid = false;
    } else if (direccion.length > 20) {
        newErrors.direccion = 'El turno debe tener máximo 20 caracteres';
        isValid = false;
    }

    return {
        isValid: isValid,
        errors: newErrors
    };
};
