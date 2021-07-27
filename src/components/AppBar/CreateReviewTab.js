import React from 'react';
import { Pressable } from 'react-native';
import { useHistory } from "react-router-native";
import Text from '../Text';

const CreateReview = ({ appBarTabStyles }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/create-review');
  };

  return (
    <Pressable onPress={handleClick} >
      <Text style={appBarTabStyles}>
        Create Review
      </Text>
    </Pressable>
  );
};

export default CreateReview;
  