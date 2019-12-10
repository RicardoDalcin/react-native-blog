import React, { useReducer } from 'react'
import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload
    case "EDIT_POST":
      return [...state.filter(p => p.id !== action.payload.id), { title: action.payload.title, content: action.payload.content, id: action.payload.id }]
    case "DELETE_POST":
      return state.filter(p => p.id !== action.payload)
    default:
      return state
  }
}

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    dispatch({ type: "GET_POSTS", payload: response.data })
  }
}

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const response = jsonServer.post('/blogposts', { title, content })
    if (callback) {
      callback()
    }
  }
}

const editBlogPost = (dispatch) => {
  return async (title, content, id, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content })
    dispatch({ type: "EDIT_POST", payload: { title, content, id } })
    callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    const response = await jsonServer.delete(`/blogposts/${id}`)
    dispatch({ type: "DELETE_POST", payload: { id } })
  }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, editBlogPost, deleteBlogPost, getBlogPosts }, [])