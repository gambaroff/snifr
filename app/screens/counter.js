import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import * as counterActions  from '../redux/modules/counter';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
          ...StyleSheet.absoluteFillObject,
          height: 400,
          width: 400,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
    map: {
          ...StyleSheet.absoluteFillObject,
        },
});

class Counter extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    const {value, increment, decrement} = this.props;

    return (
      <View style={styles.container}>
        <Text>Map!</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        />
      </View>
    );
  }
};

export default connect(
  ({counter}) => counter,
  {
    increment: counterActions.increment,
    decrement: counterActions.decrement,
  }
)(Counter);
