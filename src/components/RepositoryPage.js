import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-native";
import { StyleSheet, View, FlatList } from "react-native";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryDisplay from "./RepositoryDisplay";
import ReviewItem from "./ReviewItem";

const RepositoryPage = () => {

  const styles = StyleSheet.create({
    separator: {
      height: 10,
   },
    view: {
      flex: 1
    }
  });
  
  const ItemSeparator = () => <View style={styles.separator} />;
  
  const { id } = useParams();
  const { loading, data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });
  
  if (loading) return null;
  // console.log(data);
  const repository = data.repository;
  const reviews = data.repository.reviews.edges;

  const renderItem = ({ item }) => {
    // console.log('item');
    return (
      <ReviewItem review={item} />
    );
  };


  return (
    <View style={styles.view}>
      <RepositoryDisplay repo={repository} isDetail={true} />
      <FlatList
        data={reviews}
        keyExtractor={({ node: { id } }) => id}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default RepositoryPage;
