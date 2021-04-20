import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ReadStory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Story Hub</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          The Giant Part 3
        </Text>
        <Text>
        When Chary got lot of gifts from the king then he spend his live in enjoyment. 
        Then one day some intruders enters that kingdom and the king was unable to 
        fight them then he called Chary to help them. Chary accepted king request and 
        went to fight with the intruders. When he reached the place where the 
        intruders are spotted he saw something and he was surprised. He said "You! Is 
        I'm in my dream. You are alive". He was very surprised to see his family who 
        was separated in a volcanic eruption. Then he bringed his family inside his 
        house. The family told him how they protect themselves from the volcanic 
        eruption. Chary was feeling sorry because he was the most powerful and wise 
        giant on their island but he did nothing to stop that volcanic eruption and 
        ran away from the island and came to live in tis large kingdom. His family 
        told him it was the master plan of his biggest enemy.The Mad Scientist Quiter. 
        Chary became angry and said his family that he is going to fight with him. 
        When he was going out he feeled that something is strange and when he looked back.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'navy',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: -10,
    fontFamily: 'snap itc',
    color: 'violet',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
});
