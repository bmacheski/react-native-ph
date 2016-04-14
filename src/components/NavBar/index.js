import React from 'react-native';

let {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} = React;

class NavBar extends React.Component {

  shouldRenderBack(nav) {
   return nav.getCurrentRoutes().length > 1 ? true : false;
  }

  transitionBack() {
    this.props.navigator.pop();
  }

  renderLeftBack() {
    const { navigator } = this.props;

    { return this.shouldRenderBack(navigator) ?
      (
        <TouchableOpacity onPress={this.transitionBack.bind(this)}>
          <View>
            <Text style={styles.back}>Back</Text>
          </View>
        </TouchableOpacity>
      ) : (
      <View></View>
      )
    }
  }

  render() {
    return (
      <View style={styles.nav}>
        {this.renderLeftBack()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#fff',
    height: 44
  },
  back: {
    marginTop: 20,
    fontSize: 15
  }
});

export default NavBar;
