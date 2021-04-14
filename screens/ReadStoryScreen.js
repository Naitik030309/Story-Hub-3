import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ReadStory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Story Hub</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          The Giant Part 1
        </Text>
        <Text>
          Once upon a time, in a dense forest there lived a kind hearted giant
          whose name is Chary. He loves to play with the animals and the animals
          also loved to play with him. One day something strange happened, the
          animals of the jungle started attacking on Chary. Chary tried to help
          them but they doesn't listen to him and continued attacking him. So
          Chary started running towards his home. But some big gorilla's stopped
          his way and the gorilla's also started attcking him. He managed his
          way to home by passing the gorilla's. After reaching his home he
          started thinking why this is happening. After sometime he listened a
          strange sound. It was the sound of a witch flying on her magical
          broom. When he looked outside of his window he saw that the witch is
          saying something to the animals. After sometime the witch turned her
          broom towards her house. Then the giant came outside of his house and
          the animals started attacking him again.
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
    marginTop: -30,
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
