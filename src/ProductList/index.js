import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class ProductList extends Component {


  componentDidMount() {}

  handleOnPress = () => {
    const { dispatch } = this.props
    dispatch({type:'ProductListModel/increase'})
  }
  handleOnPressFetch = () => {
    const { dispatch } = this.props
    dispatch({type:'ProductListModel/fetchData'})
  }
  handleAddStepOnPress = () => {
    const { dispatch } = this.props
    dispatch({type:'ProductListModel/addStep'})
  }

  render() {
    const {ProductListModel} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ProductList {ProductListModel.counter}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js {ProductListModel.step}
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TouchableOpacity onPress={this.handleOnPress}>
          <Text>
            add
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleAddStepOnPress}>
          <Text>
            add  step
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}>
          <Text>
            jump
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleOnPressFetch}>
          <Text>
            init
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(
  state=>({ProductListModel:state.ProductListModel}),
  dispatch=>({dispatch})
)(ProductList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
