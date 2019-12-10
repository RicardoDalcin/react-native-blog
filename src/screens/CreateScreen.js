import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {

  const { addBlogPost } = useContext(BlogContext)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={setContent} />
      <Button title="Add blog post" onPress={() => addBlogPost(title, content, () => { navigation.navigate('Index') })} />
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

export default CreateScreen