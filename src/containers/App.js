import React from 'react-native';
import MainContainer from './MainContainer';

let {
  Navigator,
  View,
  StyleSheet
} = React


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Component = route.component;

    return (
      <View style={styles.wrapper}>
        <Component
          navigator={navigator}
          route={route}
        />
      </View>
    );
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        initialRoute={{
          component: MainContainer,
          title: 'Product Hunt RN'
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default App;
