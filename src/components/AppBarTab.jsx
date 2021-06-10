import React from 'react'
import { useHistory } from "react-router-native";

import { StyleSheet, View, Pressable } from 'react-native';

import Text from './Text';

import theme from '../theme';

const SignInPage = ({ appBarTabStyles }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/signin')
  }

  return (
    <Pressable onPress={handleClick}>
      <Text style={appBarTabStyles}>
        Sign in
      </Text>
    </Pressable>
  )
}

const Repositories = ({ appBarTabStyles }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/')
  }

  return (
    <Pressable onPress={handleClick}>
      <Text style={appBarTabStyles}>
        Repositories
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.appBar.textPrimary,
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
    <View style={{flexDirection: 'row'}}> 
      <Repositories appBarTabStyles={appBarTabStyles} />
      <SignInPage appBarTabStyles={appBarTabStyles} />
    </View>
  );

};

export default AppBarTab;
  