import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.listBackground,
  },

  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },

  imageContainer: {
    flex: 2,
    marginLeft: 5,
  },

  imageStyle: {
    borderRadius: 4,
    height: 48,
    width: 48,
  },

  topRowInfo: {
    flex: 9,
    justifyContent: 'space-between',
  },

  name: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },

  text: {
    color: theme.colors.textSecondary,
  },

  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    color: theme.colors.default,
    marginTop: 5,
    padding: 5,
  },

  statistics: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-around',
  },

  individualStat: {
    alignItems: 'center',
  },

  boldText: {
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
});

const roundThousands = (number) => {
  return number >= 1000 ? `${Math.round(number / 100) / 10}k` : number;
};

const RepositoryItem= ({ repository }) => (
  <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={{ uri: repository.ownerAvatarUrl }} />
        </View>

        <View style={styles.topRowInfo}>
          <Text style={styles.name}>{repository.fullName}</Text>
          <Text style={styles.text}>{repository.description}</Text>
          <Text style={styles.language}>{repository.language}</Text>
        </View>
      </View>
      
      <View style={styles.statistics}>
        <View style={styles.individualStat}>
          <Text style={styles.boldText}>{roundThousands(repository.stargazersCount)}</Text>
          <Text style={styles.text}>Stars</Text>
        </View>
        <View style={styles.individualStat}>
          <Text style={styles.boldText}>{roundThousands(repository.forksCount)}</Text>
          <Text style={styles.text}>Forks</Text>
        </View>
        <View style={styles.individualStat}>
          <Text style={styles.boldText}>{roundThousands(repository.reviewCount)}</Text>
          <Text style={styles.text}>Reviews</Text>
        </View>
        <View style={styles.individualStat}>
          <Text style={styles.boldText}>{roundThousands(repository.ratingAverage)}</Text>
          <Text style={styles.text}>Rating</Text>
        </View>
      </View>
    </View>
);

export default RepositoryItem;