import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {

  const { state } = useContext(BlogContext)

  const blogPost = state.find(post => post.id === navigation.getParam('id'))

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ShowScreen