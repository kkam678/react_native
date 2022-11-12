import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

export function ModelMainPopularList(props: any) {
  const {item, index} = props;
  const {image, name} = item;
  return (
    <View
      style={
        (styles.container,
        {
          marginLeft: index === 0 ? 16 : 8,
        })
      }>
      <Image source={image} style={styles.image} />
      <View style={{position: 'absolute', left: 8, top: 8}}>
        <Text style={{color: '#ffffff', fontSize: 12}}>{name}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  image: {
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').width / 2.5,
    borderRadius: 8,
  },
  info: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
});
