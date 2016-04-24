import React from 'react-native';
import { connect } from 'react-redux';
import ItemDetail from '../components/ItemDetail';

class ProductContainer extends React.Component {

  render() {
    return (
      <ItemDetail {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { currentCategory } = state.products;
  const products  = state.products[currentCategory] && state.products[currentCategory].items ? state.products[currentCategory].items : [];

  return {
    products
  }
}

export default connect(
  mapStateToProps
)(ProductContainer);
