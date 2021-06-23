import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { CHECK_AUTHORIZED } from '../graphql/queries';
import { useEffect } from 'react';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.primary
  },
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab />
    </ScrollView>
  </View>);
};

export default AppBar;
