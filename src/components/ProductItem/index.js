import React from 'react-native';

let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

class ProductItem extends React.Component {

  render() {
    return (
      <TouchableHighlight>
        <View style={styles.li}>
          <Text>name: {this.props.item.name}</Text>
          <Text>tagline: {this.props.item.tagline}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 10,
  }
})

export default ProductItem;
