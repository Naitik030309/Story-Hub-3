import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ReadStory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Story Hub</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          The Giant Part 2
        </Text>
        <Text>
          So after getting attacked by the animals again,he broke a huge tree
          and because of that the animals stop.When he saw he has time to run
          he follows the magic broom's dust all along the path because the magic
          broom leave a very little quantity of dust on his path which remains
          on the whole way until 5 hours is complete.So Chary followed the dust
          and reached the witch house.When the witch came outside of his house,
          she saw Chary and she running towards her house but Chary blocked her
          way.Chary asked her how to make the animals normal again but the
          witch didn't reply so he growl loudly which causes pain in the witch's
          ears.After a few moment a very bright white light starting to glow
          from inside the witch and then suddenly the witch turned into a queen.
          Then Chary asked her about his witch form,so the queen told him that
          she was caught by a witch and she has turned me into a witch and told
          me that the only way from which I can became normal was that hearing a
          very loud sound.Thank you for your help.I will ask my father to
          reward you.
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
