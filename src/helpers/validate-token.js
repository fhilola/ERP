function validateToken(token){
    const payload = token.split('.')[1]
    if(payload){
        try {
            const exp = JSON.parse(atob(payload)).exp
            const now = new Date().getTime() / 1000
            if(exp > now){
                return true
            }
            localStorage.removeItem('access_token')
            return false
        } catch (error) {
            localStorage.removeItem('access_token')
            console.log(error);
        }
    }
    else{
        localStorage.removeItem('access_token')
        console.log('Invalid Token');
    }
}

export {validateToken}