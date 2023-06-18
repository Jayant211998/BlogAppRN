import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons'; 

const ShowScreen = ({navigation}) => {

    const {state} = useContext(Context);

    const blogPost = state.find((blog) => blog.id === navigation.getParam('id'))
    return(
        <View>
            <Text style={styles.textStyle}>{blogPost.title}</Text>
            <Text style={styles.contentStyle}>{blogPost.content}</Text>
       </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => {navigation.navigate('Edit', { id: navigation.getParam('id')})}}>
              <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
          ),
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        marginVertical: 10

    },
    contentStyle:{
        fontSize: 20,
        marginVertical: 10
    }
});
export default ShowScreen;
