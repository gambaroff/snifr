import React, { Component } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import styles from '../styles';

class Welcome extends Component {
  static navigationOptions = {
    title: 'snifr',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, styles.text]}>
          Welcome to Snifr!
        </Text>
        <Text style={[styles.instructions, styles.text]}>
          Snifr is currently in BETA. To get started, enter your email:
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          title="Learn More"
          color="#841584"
        />

        <Text style={[styles.instructions, styles.text]}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
};

export default Welcome;

