import { userLogin, userRegister } from '../redux/features/auth/AuthAction';
import store from '../redux/store'


export const handleLogin =(e,email,password,role)=>{
      e.preventDefault()
      try {
        if(!role || !email || !password){
            return alert("please provide all fields");
        }
        store.dispatch(userLogin({email,password,role}))
      } catch (error) {
        console.log(error)
      }
}

export const handleRegister=(  e,
    name,
    email,
    password,
    role,
    organisationName,
    hospitalName,
    website,
    address,
    phone)=>{
        e.preventDefault()
        try {
           store.dispatch(userRegister({name,
            email,
            password,
            role,
            organisationName,
            hospitalName,
            website,
            address,
            phone}))
        } catch (error) {
            console.log(error);
        }
}