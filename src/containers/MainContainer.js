import React from 'react-native';
import { connect } from 'react-redux';
import Main from '../components/Main';

class MainContainer extends React.Component {

  render() {
    return (
      <Main {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { token } = state.user;
  const { currentCategory, isFetching } = state.products;
  const products  = state.products[currentCategory] && state.products[currentCategory].items ? state.products[currentCategory].items : [];
  const { categories } = state;

  return {
    token,
    products,
    isFetching,
    categories
  }
}

export default connect(
  mapStateToProps
)(MainContainer);
