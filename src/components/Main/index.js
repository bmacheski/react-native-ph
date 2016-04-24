import React from 'react-native';
import SideMenu from 'react-native-side-menu';
import { handleToken } from '../../actions/user';
import { fetchProducts } from '../../actions/products';
import ProductItem from '../ProductItem';
import ProductContainer from '../../containers/ProductContainer';
import Menu from '../Menu';

let {
  View,
  Text,
  ListView,
  StyleSheet,
  ActivityIndicatorIOS
} = React;

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.handleTransition = this.handleTransition.bind(this);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentWillMount() {
    const { dispatch, token, navigator } = this.props;

    if (!token) {
      dispatch(handleToken());
    }
  }

  handleTransition(item) {
    const { navigator } = this.props;

    navigator.push({
      component: ProductContainer,
      id: item.id
    })
  }

  renderProductItem(item) {
    return (
      <ProductItem
        style={styles.item}
        item={item}
        handleTransition={this.handleTransition.bind(this, item)}
      />
    );
  }

  renderProductList() {
    const { products } = this.props;
    const dataSource = this.state.dataSource.cloneWithRows(products);

    return (
      <ListView
        style={styles.list}
        dataSource={dataSource}
        renderRow={this.renderProductItem.bind(this)}
      />
    );
  }

  renderLoadingScreen() {
    return (
      <ActivityIndicatorIOS
        animating={true}
        style={[{ height: 80 }]}
        size="large"
      />
    );
  }

  render() {
    const { isFetching, categories, token, dispatch } = this.props;

    const menu = (
      <Menu
        categories={categories}
        token={token}
        dispatch={dispatch}
      />
    );

    return (
      <SideMenu
        isOpen={false}
        menu={menu}>
        <View style={styles.container}>
          {isFetching ? this.renderLoadingScreen() : this.renderProductList()}
        </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});

export default Main;
