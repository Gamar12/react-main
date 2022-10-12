
export const requiredFields = (value) => {
    if (value) return undefined;
    return 'WORK required field'
}

export const createMaxLengthValidator = (maxLength) => (value) => {
    if (value && value.length > maxLength ) return `WORK validator, max symbols - ${maxLength}`
    return undefined;
}