import {
    reqRegister, 
    reqLogin
} from '../api'
import {
    AUTH_SUCCESS, 
    ERROR_MSG 
} from './action-types' 

const errorMsg = (msg) => ({type:ERROR_MSG, data: msg})
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})

//register asychronized action
export const register = (user) => {
    const {username, password, confirmpw, type} = user
    if(!username){
        return errorMsg('please enter username')
    }
    else if(!password){
        return errorMsg('please enter password')
    }
    else if(password!=confirmpw){
        return errorMsg('confirm password does not match password')
    }
    
    return async dispatch => {
        /*
        const promise = reqRegister(user)
        promise.then(response => {
            const result = response.data
        })
        //await is syntax sugar, replace promise.then()
        */
       const response = await reqRegister({username, password,type})
       const result = response.data
       if(result.code === 0){
        dispatch(authSuccess(result.data)) 
       }
       else{
        dispatch(errorMsg(result.msg))
       }
    }
}

//login asychronized action
export const login = (user) => {
    const {username, password} = user
    if(!username){
        return errorMsg('please enter username')
    }
    else if(!password){
        return errorMsg('please enter password')
    }

    return async dispatch =>{
       const response = await reqLogin(user)
       const result = response.data
       if(result.code === 0){
        dispatch(authSuccess(result.data)) 
       }
       else{
        dispatch(errorMsg(result.msg))
       }
    }
}