import React from 'react-native';
import { handleToken } from '../../actions/user';
import { fetchProducts } from '../../actions/products';
import ProductItem from '../ProductItem';

let {
  View,
  Text,
  ListView,
  StyleSheet,
  ActivityIndicatorIOS,
} = React;

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentWillMount() {
    const { dispatch, token } = this.props;

    if (!token) {
      dispatch(handleToken());
    }
  }

  renderProductItem(item) {
    return (
      <ProductItem
        item={item}
      />
    );
  }

  renderProductList() {
    const { products } = this.props;

    const dataSource = this.state.dataSource.cloneWithRows(products);

    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderProductItem.bind(this)}
      />
    );
  }

  renderLoadingScreen() {
    return (
      <ActivityIndicatorIOS
        animating={true}
        style={[{height: 80}]}
        size="large"
      />
    );
  }

  render() {
    const { isFetching } = this.props;

    return (
      <View style={styles.container}>
        { isFetching ? this.renderLoadingScreen() : this.renderProductList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default Main;
