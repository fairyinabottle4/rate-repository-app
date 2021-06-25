import { useQuery } from "@apollo/client";
import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { CHECK_AUTHORIZED } from "../graphql/queries";
import ReviewItem from "./ReviewItem";

const UserReviews = () => {
  const { data, loading, fetchMore } = useQuery(CHECK_AUTHORIZED, {
    fetchPolicy: "cache-and-network",
    variables: {
      includeReviews: true,
      first: 20,
    },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: CHECK_AUTHORIZED,
      variables: {
        includeReviews: true,
        after: data.authorizedUser.reviews.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          authorizedUser: {
            ...fetchMoreResult.authorizedUser,
            reviews: {
              ...fetchMoreResult.authorizedUser.reviews,
              edges: [
                ...previousResult.authorizedUser.reviews.edges,
                ...fetchMoreResult.authorizedUser.reviews.edges,
              ],
            },
          },
        };
        return nextResult;
      },
    });
  };

  const ItemSeparator = () => <View style={styles.separator} />;

  const onEndReach = () => {
    handleFetchMore();
  };

  const reviews = data?.authorizedUser.reviews.edges;
  // console.log(reviews);

  const renderItem = ({ item }) => {
    // console.log('here');
    // console.log(item);
    return (
      <ReviewItem review={item} />
    );
  };
  
  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={({ node: { id } }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
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
  
export default UserReviews;
