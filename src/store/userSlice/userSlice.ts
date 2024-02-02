import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import type { PayloadAction } from '@reduxjs/toolkit'


export interface Iuser {
    users:RootInterface[];
    currentUser:RootInterface;
    usersActive:RootInterface[];
    usersArchive:RootInterface[];
}


export interface RootInterface {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

const initialState: Iuser = {
    users:[],
    currentUser:{},
    usersActive:[],
    usersArchive:[]
}


export const fetchUsers = createAsyncThunk(
    'users/fetch',

    async () => {
        const  data  = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return  (data)
    },
)
export const fetchUserbyId = createAsyncThunk(
    'users/fetchById',
    async (id:number) => {
        const  data  = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        return (data)
    },
)
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        activedUser: (state,{payload}) => {
            state.usersActive.push(payload)
            console.log(payload);
            state.usersArchive=state.usersArchive.filter((item)=>item.id !==payload.id)
          },
        archiveUser: (state,{payload}) => {
            console.log(payload);
            
            state.usersArchive.push(payload)            
            state.usersActive=state.usersActive.filter((item)=>item.id !==payload.id)
          }, 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
            state.users= payload.data;
            state.usersActive = state.users.filter((user:RootInterface)=>user.id>5)
            state.usersArchive = state.users.filter((user:RootInterface)=>user.id<=5)
        }),
        builder.addCase(fetchUserbyId.fulfilled, (state, { payload }) => {
            console.log(payload,"current");
            
            state.currentUser = payload.data
            console.log(payload.data);
            
        })
        // builder.addCase(fetchUsers.rejected, (state, action) => {
        //     if (action.payload) {
        //         // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        //         console.log(action);

        //     } else {
        //         console.log(action);
        //     }
        // })
    }
})

// Action creators are generated for each case reducer function
  export const {activedUser , archiveUser } = userSlice.actions

export default userSlice.reducer