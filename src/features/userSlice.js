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
      // action is object of current user
      state.currentUser = action.payload
    }
    setUserIngredients(state, action) {
      // action is going to be all users ingredients
      state.userIngredients = action.payload
    }
    setUserFavorites(state, action) {
      // action is all of user's favorites
      state.userFavorites = action.payload
    }
    addUserIngredient(state, action) {
      // action is an id to be added
      state.userIngredients.push(action.payload)
      // state.userIngredients = [...state.userIngredients, action.payload]
    }
    removeUserIngredient(state, action) {
      // action is going to be an id passed in to remove
      state.userIngredients = state.userIngredients.filter(ing => ing.id !== action.payload)
    }
    addUserFavorite(state, action){
      // action is going to be an id passed in to add
      state.userFavorites.push(action.payload)
      //state.userFavorites = [...state.userFavorites, action.payload]
    }
    removeUserFavorite(state, action){
      //action is going to be an id passed in to remove
      state.userFavorites = state.userFavorites.filter(fav => fav.id !== action.payload)
    }
  }
})

export const {
  setCurrentUser,
  setUserIngredients,
  setUserFavorites,
  addUserIngredient,
  removeUserIngredient,
  addUserFavorite,
  removeUserFavorite
} = userSlice.actions

export default userSlice.reducer