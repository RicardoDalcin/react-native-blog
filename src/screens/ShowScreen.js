import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {

  const { state } = useContext(BlogContext)

  const blogPost = state.find(post => post.id === navigation.getParam('id'))

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })} >
        <EvilIcons size={24} name="pencil" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({})

export default ShowScreen