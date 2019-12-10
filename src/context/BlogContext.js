import React, { useReducer } from 'react'
import createDataContext from './createDataContext'


const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, { id: Math.floor(Math.random() * 9999), title: action.payload.title, content: action.payload.content }]
    case "EDIT_POST":
      return [...state.filter(p => p.id !== action.payload.id), { title: action.payload.title, content: action.payload.content, id: action.payload.id }]
    case "DELETE_POST":
      return state.filter(p => p.id !== action.payload)
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_POST", payload: { title, content } })
    callback()
  }
}

const editBlogPost = (dispatch) => {
  return (title, content, id, callback) => {
    dispatch({ type: "EDIT_POST", payload: { title, content, id } })
    callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_POST", payload: id })
  }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, editBlogPost, deleteBlogPost }, [])