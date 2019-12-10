import React, { useReducer } from 'react'
import createDataContext from './createDataContext'


const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, { id: Math.floor(Math.random() * 9999), title: `Blog post #${state.length + 1}` }]
    case "DELETE_POST":
      return state.filter(p => p.id !== action.payload)
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_POST" })
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_POST", payload: id })
  }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [])