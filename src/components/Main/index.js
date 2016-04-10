import React from 'react-native';
import { handleToken } from '../../actions/products';

let {
  View,
  Text,
} = React;

class Main extends React.Component {

  componentDidMount() {
    const { dispatch, token } = this.props;

    if (!token) {
      dispatch(handleToken());
    }
  }

  render() {
    return (
      <View>
        <Text>Product Hunt</Text>
      </View>
    );
  }
}

export default Main;
