import React from 'react';
import { useHistory } from "react-router-native";
import Text from '../Text';

import { Pressable } from 'react-native';

const SignUpPage = ({ appBarTabStyles }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/signup');
  };

  return (
    <Pressable onPress={handleClick}>
      <Text style={appBarTabStyles}>
        Sign up
      </Text>
    </Pressable>
  );
};
  

export default SignUpPage;