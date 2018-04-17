import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const MyButton = ({buttonType, onPress}) => {
  return(
    <TouchableOpacity
      style={ buttonType === 'count' ?
         styles.buttonContainer : styles.resetButtonContainer}
      onPress={onPress}
    >
      <Text style={buttonType === 'count' ?
        styles.buttonText : styles.resetButtonText}>
        {buttonType === 'count' ? 'Clicca Qui' : 'Reset'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 30,
    backgroundColor: 'orange'
  },
  buttonText: {
    fontSize: 20
  },
  resetButtonContainer: {
    backgroundColor: 'blue',
    padding: 30
  },
  resetButtonText: {
    fontSize: 20,
    color: 'white'
  }
});

export default MyButton;