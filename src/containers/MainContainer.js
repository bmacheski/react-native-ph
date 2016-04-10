import React from 'react-native';
import { connect } from 'react-redux';
import Main from '../components/Main';

class MainContainer extends React.Component {

  render() {
    return (
      <Main {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  const { token } = state.user;
  const products  = state.products.items.length > 0 ? state.products.items : [];
  const { isFetching } = state.products;

  return {
    token,
    products,
    isFetching
  }
}

export default connect(
  mapStateToProps
)(MainContainer);
