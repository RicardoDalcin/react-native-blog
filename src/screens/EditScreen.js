import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {

  const { state, editBlogPost } = useContext(BlogContext)
  const blogPostEdit = state.find(p => p.id === navigation.getParam('id'))

  const [title, setTitle] = useState(blogPostEdit.title)
  const [content, setContent] = useState(blogPostEdit.content)

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={setContent} />
      <Button title="Save" onPress={() => editBlogPost(title, content, blogPostEdit.id, () => { navigation.navigate('Index') })} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 18,
    borderColor: 'black',
    marginHorizontal: 10,
    padding: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginHorizontal: 10
  }
})

export default EditScreen