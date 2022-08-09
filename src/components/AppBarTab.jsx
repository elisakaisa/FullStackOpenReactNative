import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from './theme';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    color: theme.appBar.textPrimary,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
    padding: 10,
  },
});

const AppBarTab = ({text, url}) => {
  return (
    <Link to={url}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
};

export default AppBarTab;