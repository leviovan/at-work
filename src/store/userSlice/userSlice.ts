import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import type { PayloadAction } from '@reduxjs/toolkit'


export interface Iuser {
    users:RootInterface[]
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

const initialState: Iuser = {users:
[{
    "id": 0,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}]}

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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
            console.log(payload, "----------------")
            state.users = payload.data;
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
//  export const {  } = userSlice.actions

export default userSlice.reducer