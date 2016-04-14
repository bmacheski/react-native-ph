import React from 'react-native';

let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  Dimensions
} = React;

let { width } = Dimensions.get('window');

class ProductItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { handleTransition } = this.props;

    return (
      <View style={styles.li}>
        <TouchableHighlight onPress={handleTransition}>
          <View>
            <View>
              <Image
                style={styles.icon}
                source={{ uri: this.props.item.thumbnail.image_url }}
              />
            </View>
            <View>
              <Text style={styles.title}>{this.props.item.name}</Text>
              <Text style={styles.tagline}>{this.props.item.tagline}</Text>
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
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  title: {
    fontSize: 18,
  },
  tagline: {
    flex: 1,
    width: width - 60,
    flexWrap: 'wrap',
  }
});

export default ProductItem;
