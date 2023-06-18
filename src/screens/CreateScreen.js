import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {

    const {addBlogPost} = useContext(Context);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return(
        <View>
            <Text style={styles.textStyle}>Enter Title</Text>
            <TextInput style={styles.inputStyle} value={title} onChangeText={(text)=>{setTitle(text)}}/>
            <Text style={styles.textStyle}>Enter Content</Text>
            <TextInput style={styles.inputStyle} value={content} onChangeText={(text)=>{setContent(text)}}/>
            <Button title="Add Blog Post" onPress={()=>{addBlogPost(title, content, ()=>{navigation.navigate('Index')})}}/>
       </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
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
export default CreateScreen;
