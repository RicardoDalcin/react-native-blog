import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import BlogContext from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler';

const IndexScreen = () => {

  const { data, addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Button title="Add post" onPress={() => addBlogPost({ title: `blog post #${data.length + 1}` })} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (<Text>{item.title}</Text>)}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen