import { View, StyleSheet, ScrollView } from 'react-native';
//import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from './theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.primary,
    // ...
  },
});


const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' url='/'/>
        <AppBarTab text='Sign In' url='/sign-in'/>
      </ScrollView>
    </View>
  );
};

export default AppBar;