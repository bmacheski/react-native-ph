import React from 'react-native';
import MainContainer from './MainContainer';

let {
  Navigator,
  View
} = React

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Component = route.component;

    return (
      <View>
        <Component navigator={navigator} route={route} />
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
    )
  }
}

export default App;
