import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import Dropdown from "./Dropdown";

const RepositoryListContainer = ({ repositories, onPress, sort }) => {
  
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }) => {
    return (
      <RepositoryItem repo={item} />
    );
  };

  return (
    <FlatList
      testID='overallList'
      data={repositoryNodes}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <Dropdown onPress={onPress} sort={sort} />}
      ListHeaderComponentStyle={styles.listHeader}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
  
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  listHeader: {
    zIndex: 10,
  },
});


export default RepositoryListContainer;