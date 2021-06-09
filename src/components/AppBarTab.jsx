import React from 'react'

import { StyleSheet, TouchableWithoutFeedback, Pressable, TextStyle, StyleProp } from 'react-native';

import Text from './Text';

import theme from '../theme';


const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.appBar.textPrimary,
    padding: 8
  },
  active: {
    textDecorationLine: 'underline'
  }
});

const AppBarTab = ({ isActive, onPress = () => null, style, ...props}) => {
  const appBarTabStyles = [
    styles.text,
    isActive && styles.active,
    style
  ];

  return (
    <Pressable
      onPress={() => {
        console.log('tab pressed!');
      }}
    >
      <Text 
        style={appBarTabStyles}
        {...props}
      >
        Repositories
      </Text>
    </Pressable>
  );

};

export default AppBarTab;
  