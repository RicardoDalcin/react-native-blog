import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {

  const { state, editBlogPost } = useContext(BlogContext)
  const blogPostEdit = state.find(p => p.id === navigation.getParam('id'))

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(title, content, navigation.getParam('id'), () => navigation.pop())
      }}
      initialValues={{ title: blogPostEdit.title, content: blogPostEdit.content }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen