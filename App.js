import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import RootStack from './src/components/RootStack'
import store from './src/redux/store'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}


export default App;

console.disableYellowBox = true;