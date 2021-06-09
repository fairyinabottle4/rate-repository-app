import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: 'blue',
    fontSize: 24,
    fontWeight: '700',
  },
});

const RepositoryItem = ({ repo }) => (
  <View style={styles.containers}>
    <Text style={styles.text}>Full name: {repo.fullName}</Text>
    <Text fontWeight="bold">Description: {repo.description}</Text>
    <Text>Language: {repo.language}</Text>
    <Text>Forks: {repo.forksCount}</Text>
    <Text>Stars: {repo.stargazersCount}</Text>
    <Text>Reviews: {repo.reviewCount}</Text>
    <Text>Rating: {repo.ratingAverage}</Text>
  </View>
)

export default RepositoryItem