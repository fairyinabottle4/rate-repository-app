import React from 'react';
import { useQuery } from '@apollo/client';
import { CHECK_AUTHORIZED } from '../../graphql/queries';

import { StyleSheet, View } from 'react-native';
import CreateReview from './CreateReviewTab';
import SignInPage from './SignInPageTab';
import SignUpPage from './SignUpPageTab';
import Repositories from './RepositoriesTab';
import MyReviews from './MyReviewsTab';
import SignOut from './SignOutTab';

import theme from '../../theme';

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

  const { data } = useQuery(CHECK_AUTHORIZED);

  const appBarTabStyles = [
    styles.text,
    isActive && styles.active,
    style
  ];
  // console.log(data);
  return (
    <View style={{flexDirection: 'row'}}> 
      <Repositories appBarTabStyles={appBarTabStyles} />
      {data?.authorizedUser ? 
      <>
        <SignOut appBarTabStyles={appBarTabStyles} /> 
        <CreateReview appBarTabStyles={appBarTabStyles} />
        <MyReviews appBarTabStyles={appBarTabStyles} />
      </>  
      : 
      <>
        <SignInPage appBarTabStyles={appBarTabStyles} />
        <SignUpPage appBarTabStyles={appBarTabStyles} />
      </>
      }
      
    </View>
  );

};

export default AppBarTab;
  