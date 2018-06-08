import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>Hello, world!</Text>
        <Button
          title="Go to Detail"
          onPress={() => navigate('Detail')}
        >
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen
