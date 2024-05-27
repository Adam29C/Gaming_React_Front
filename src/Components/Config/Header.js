export const header = (token) => {

    const header = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return header
}