export const validateStatus = (status: string) => {
    if (status === 'alive' || status === 'dead' || status === 'unknown') {
        return true;
    }
    return false;
}

export const validateGender = (gender: string) => {
    if (gender === 'male' || gender === 'female' || gender === 'genderless' || gender === 'unknown') {
        return true;
    }
    return false;
}

export const validateInputSize = (input: string) => {
    if (input.length > 0) {
        return true;
    }
    return false;
}