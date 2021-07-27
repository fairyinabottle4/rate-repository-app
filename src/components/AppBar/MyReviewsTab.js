import React from 'react';
import { useHistory } from "react-router-native";
import Text from '../Text';

import { Pressable } from 'react-native';

const MyReviews = ({ appBarTabStyles }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/user-reviews');
  };

  return (
    <Pressable onPress={handleClick}>
      <Text style={appBarTabStyles}>
        My Reviews
      </Text>
    </Pressable>
  );
};
  
export default MyReviews;