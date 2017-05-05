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
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {

    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
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
