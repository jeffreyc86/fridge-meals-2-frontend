import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    userIngredients: [],
    userFavorites: []
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    }
    setUserIngredients(state, action) {
      state.userIngredients = action.payload
    }
    setUserFavorites(state, action) {
      state.userFavorites = action.payload
    }
    addUserIngredient(state, action) {
      state.userIngredients.push(action.payload)
      // state.userIngredients = [...state.userIngredients, action.payload]
    }
    removeUserIngredient(state, action) {
      state.userIngredients = state.userIngredients.filter(ing => ing.id !== action.payload)
    }

    addFavorites(state,action){
      state.
    }
  }
})

export const {setCurrentUser, setUserIngredients, setUserFavorites, addUserIngredient, removeUserIngredient}
