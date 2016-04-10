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

  return {
    token
  }
}

export default connect(
  mapStateToProps
)(MainContainer);
