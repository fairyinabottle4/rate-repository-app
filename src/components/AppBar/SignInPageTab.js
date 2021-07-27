import React from 'react';
import { useHistory } from "react-router-native";
import Text from '../Text';

import { Pressable } from 'react-native';

const SignInPage = ({ appBarTabStyles }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/signin');
  };

  return (
    <Pressable onPress={handleClick}>
      <Text style={appBarTabStyles}>
        Sign in
      </Text>
    </Pressable>
  );
};
  

export default SignInPage;