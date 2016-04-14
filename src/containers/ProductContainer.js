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
  const products  = state.products.items.length > 0 ? state.products.items : [];

  return {
    products
  }
}

export default connect(
  mapStateToProps
)(ProductContainer);
