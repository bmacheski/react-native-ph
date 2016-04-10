import React from 'react-native';
import MainContainer from './MainContainer';

let {
  Navigator,
} = React

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Component = route.component;

    return <Component navigator={navigator} route={route} />
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        initialRoute={{
          component: MainContainer,
          name: 'Main'
        }}
      />
    )
  }
}

export default App;
