import React from 'react';
import { useHistory } from "react-router-native";
import Text from '../Text';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { Pressable } from 'react-native';

const SignOut = ({ appBarTabStyles }) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const history = useHistory();

  const handleLogout = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/signin');
  };

  return (
    <Pressable onPress={handleLogout}>
      <Text style={appBarTabStyles}>
        Sign out
      </Text>
    </Pressable>
  );
};

export default SignOut;  