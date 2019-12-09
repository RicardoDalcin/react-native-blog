import React, { useState } from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {

  const [blogPosts, setBlogPosts] = useState([])

  const addBlogPost = (blogPost) => {
    setBlogPosts([...blogPosts, blogPost])
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext