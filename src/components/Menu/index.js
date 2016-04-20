import React from 'react-native';
import NavItem from '../NavItem';

let {
  View,
  Text,
  ScrollView,
  ListView,
  Dimensions,
  StyleSheet
} = React;

const window = Dimensions.get('window');

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  renderNavItem(item) {
    return (
      <NavItem
        style={styles.item}
        item={item}
      />
    );
  }

  renderNavList() {
    const categories = this.props.categories.items;
    const dataSource = this.state.dataSource.cloneWithRows(categories);

    return (
      <ListView
        style={styles.list}
        dataSource={dataSource}
        renderRow={this.renderNavItem.bind(this)}
      />
    );
  }

  render() {
    return (
      <ScrollView styles={styles.menu}>
        <View>
          {this.renderNavList()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
  }
});

export default Menu;
