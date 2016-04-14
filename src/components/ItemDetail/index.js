import React from 'react-native';

let {
  View,
  Text,
  StyleSheet,
  Image
} = React;

class ItemDetail extends React.Component {

  render() {
    const { id } = this.props.route;
    const { products } = this.props;
    const selected = products.filter(p => p.id === id)[0];

    return (
      <View>
        <View>
          <Image
            style={styles.icon}
            source={{ uri: selected.thumbnail.image_url }}
          />
        </View>
        <View>
          <Text>{selected.name}</Text>
          <Text>{selected.tagline}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 200,
    height: 200,
    flex: 1
  }
});

export default ItemDetail;
