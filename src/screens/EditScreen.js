import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {

    const {state, editBlogPost} = useContext(Context);
    const blogPost = state.find((blog) => blog.id === navigation.getParam('id'))
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return(
        <View>
            <Text style={styles.IDStyle}>ID-{navigation.getParam('id')}</Text>
            <Text style={styles.textStyle}>Enter Title</Text>
            <TextInput style={styles.inputStyle} value={title} onChangeText={(text)=>{setTitle(text)}}/>
            <Text style={styles.textStyle}>Enter Content</Text>
            <TextInput style={styles.inputStyle} value={content} onChangeText={(text)=>{setContent(text)}}/>
            <Button title="Save Blog Post" onPress={()=>{editBlogPost(title, content, navigation.getParam('id'), ()=>{navigation.navigate('Index')})}}/>
       </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    IDStyle:{
        fontSize: 30,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    inputStyle:{
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5
    }
});
export default EditScreen;
