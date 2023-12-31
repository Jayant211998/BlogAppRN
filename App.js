import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import EditScreen from './src/screens/EditScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator({
    Create: CreateScreen,
    Show: ShowScreen,
    Edit: EditScreen,
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions:{
      title: 'Blogs'
    }
  }
);

const App = createAppContainer(navigator);
export default () => {
   return (
    <Provider>
      <App/>
    </Provider>
    );
}

