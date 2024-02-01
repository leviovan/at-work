import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import type { PayloadAction } from '@reduxjs/toolkit'


export interface Iuser {
    users:RootInterface[];
    usersActive:RootInterface[];
    usersArchive:RootInterface[];
}


export interface RootInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
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
    usersActive:[],
    usersArchive:[]
}


export const fetchUsers = createAsyncThunk(
    'users/fetch',

    async () => {
        const  data  = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return await (data)
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
            console.log(payload, "----------------")
            state.users= payload.data;
            state.usersActive = state.users.filter(item=>item.id>5)
            state.usersArchive = state.users.filter(item=>item.id<=5)
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