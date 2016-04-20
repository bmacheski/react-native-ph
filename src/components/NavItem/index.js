import React from 'react-native';

let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

class NavItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;

    return (
      <View style={styles.li}>
        <TouchableHighlight>
          <View>
            <View>
              <Text>{item.name}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  }
});

export default NavItem;
