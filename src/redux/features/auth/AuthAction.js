import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../services/Api"
import {toast} from 'react-toastify'
export const userLogin = createAsyncThunk(
    'auth/login',
    async({role,email,password},{rejectWithValue})=>{
  try {
    const {data}=await Api.post('/auth/login',{role,email,password})

    if(data.success){
      localStorage.setItem('token',data.token)
      toast.success(data.message);
      window.location.replace("/");
    }
    return data;
  } catch (error) {
      if(error.response && error.response.data.message){
        return rejectWithValue(error.response.data.message);
      }else{
        return rejectWithValue(error.message);
      }
  }
    }
);
//register

export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      email,
      password,
      role,
      organisationName,
      hospitalName,
      website,
      address,
      phone
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await Api.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
      if (data?.success) {
        alert("User Registerd Successfully");
        window.location.replace("/login");
        // toast.success("User Registerd Successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//current user

export const getCurrentUser=createAsyncThunk(
  "auth/getCurrentUser",
  async({rejectWithValue})=>{
    try {
       const res=await Api.get("/auth/current-user");
       if(res?.data){
         return res?.data;
       }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)