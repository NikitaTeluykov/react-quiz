import axios from "axios";

export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        let url;

        if(isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASolrtk7a7Ji0TGiWkNSIxZBTcDyH7p8w'
        }

        else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASolrtk7a7Ji0TGiWkNSIxZBTcDyH7p8w'
        }

        const response = await axios(url, authData)
        const data = response.data

        localStorage.setItem('token', data.isToken)
        localStorage.setItem('userId', data.localId)
    }
}