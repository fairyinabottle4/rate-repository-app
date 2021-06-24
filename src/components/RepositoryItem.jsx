import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from "react-router-native";
import RepositoryDisplay from './RepositoryDisplay';


const RepositoryItem = ({ repo }) => {

  return (
    <Link to={`/repository/${repo.id}`} component={TouchableOpacity}>
      <RepositoryDisplay repo={repo} />
    </Link>
  );
};

export default RepositoryItem;

