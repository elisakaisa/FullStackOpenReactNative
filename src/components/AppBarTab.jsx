import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import theme from './theme';
import Text from './Text';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  text: {
    color: theme.appBar.textPrimary,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    padding: 10,
  },
});

const AppBarTab = ({text, url}) => {

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async() => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  }

  return (
    <Link to={url} onPress={text === 'Sign Out' ? signOut : false}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
};

export default AppBarTab;