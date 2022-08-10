import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from "@apollo/client";

import theme from './theme';
import AppBarTab from './AppBarTab';
import { ME } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.primary,
  },
});

const AppBar = () => {

  let authUser = null;

  const {data} = useQuery(ME, {
    fetchPolicy: 'cache-and-network'
  });

  if (data) {
    console.log(data.me);
    authUser = data.me;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' url='/'/>
        {authUser ? (
          <AppBarTab text="Sign Out" url="/" />
        ) : (
          <AppBarTab text="Sign In" url="/sign-in" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;