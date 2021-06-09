import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: 'white'
  },
  language: {
    padding: 4,
    color: 'white',
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  avatar: {
    //this is for the avatar
    width: 50,
    height: 50,
    borderRadius: 45/2
  },
  flexContainer: {
    display: 'flex',
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    color: 'white',
    justifyContent: 'space-between'
  },
  flexTopArea: {
    flexGrow: 0.6,
    paddingBottom: 20,
    flexDirection: 'row'
  },
  flexTopLeft: {
    //this contains the avatar
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexTopRight: {
    justifyContent: 'space-between',
  },
  flexBottomArea: {
    //this contains stars, forks, reviews, ratings
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 13,
    justifyContent: 'space-between',
  },
  flexBottomBox: {
    //this contains the numerical figure and the title beneath
    flexGrow: 0.25
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  bodyText: {
    paddingVertical: 4,
    color: theme.colors.secondary,
  }

});

const roundNum = (num) => {
  return (num/1000).toFixed(1)
}

const RepositoryItem = ({ repo }) => (
  <View style={styles.backGround}>
    <View style={styles.flexContainer}>
      <View style={styles.flexTopArea}>
        <View style={styles.flexTopLeft}>
          <Image style={styles.avatar} source={{uri: repo.ownerAvatarUrl}}>
          </Image>
        </View>
        <View style={styles.flexTopRight}>
          <Text style={styles.subheading}>{repo.fullName}</Text>
          <Text style={styles.bodyText}>{repo.description}</Text>
          <Text style={styles.language}>{repo.language}</Text>
        </View>
      </View>


      <View style={styles.flexBottomArea}>
        <View style={styles.flexBottomBox}>
          <Text style={styles.subheading}>{roundNum(repo.stargazersCount)}k</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.flexBottomBox}>
          <Text style={styles.subheading}>{roundNum(repo.forksCount)}k</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.flexBottomBox}>
          <Text style={styles.subheading}>{repo.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.flexBottomBox}>
          <Text style={styles.subheading}>{repo.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>

  </View>
)

export default RepositoryItem

