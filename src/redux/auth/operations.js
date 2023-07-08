import axios from "axios";
import Notiflix from "notiflix";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://connections-api.herokuapp.com/"

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('user/register',
  async (credential, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credential)
      setAuthHeader(res.data.token);
      return res.data;
    }
    catch (error) {
      if (credential.password.length < 10) {
        Notiflix.Notify.failure('Bad password!');
      }
      else {
        Notiflix.Notify.failure('there is already a user with this name or email');
        return thunkAPI.rejectWithValue(error.message);
      }
    }

  })


export const login = createAsyncThunk('user/login',
    async (credential, thunkAPI) => {
        try {
          const res = await axios.post('/users/login', credential)
          setAuthHeader(res.data.token);  
          return res.data
        }
        catch (error) {
           Notiflix.Notify.failure('email or password is not correct');
            return thunkAPI.rejectWithValue(error.message)
        }
    
    })


export const logOut = createAsyncThunk('users/logOut',
    async (_, thunkAPI) => {
      try {
        
           await axios.post('/users/logout')
           clearAuthHeader();
        }
         catch (error) {
           return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
   
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
     
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
       setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);