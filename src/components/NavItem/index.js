import React from 'react-native';
import { fetchProducts } from '../../actions/products';

let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

class NavItem extends React.Component {

  constructor(props) {
    super(props);
  }

  handleTransition(data) {
    const { token, dispatch } = this.props;
    const category = data.slug;

    dispatch(fetchProducts(token, category));
  }

  render() {
    const { item } = this.props;

    return (
      <View style={styles.li}>
        <TouchableHighlight onPress={this.handleTransition.bind(this, item)}>
          <View>
            <View>
              <Text>{item.name}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 20,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  }
});

export default NavItem;
