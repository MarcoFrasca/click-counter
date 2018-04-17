import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import MyButton from './src/components/common/Button';

class ClickCounter extends Component {

  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  onPress = () => {
    this.setState({count: this.state.count + 1})
  };

  onReset = () => {
    this.setState({count: 0})
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Contatore: {this.state.count}</Text>
        <MyButton buttonType="count" onPress={() => this.onPress()} />
        <MyButton buttonType="reset" onPress={() => this.onReset()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    color: 'green'
  }
});

export default ClickCounter;