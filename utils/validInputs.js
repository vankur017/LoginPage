export const checkValidData = (username, password) => {


    const isUsernameValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(username);
    
    
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!isPasswordValid) return 'Password is not valid';
    if (!isUsernameValid) return 'Username is not valid';

    return null;
}
