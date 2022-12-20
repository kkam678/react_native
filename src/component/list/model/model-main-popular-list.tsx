import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Constants} from '../../../config/constants';
import {ModelDto} from '../../../dto/model.dto';

interface IProps {
  item: ModelDto;
  index: number;
}
export function ModelMainPopularList(props: IProps) {
  const {item, index} = props;
  return (
    <View
      style={
        (styles.container,
        {
          marginLeft: index === 0 ? 16 : 8,
        })
      }>
      <Image source={{uri: item.profile_image ?? Constants.noPicImageUrl}} style={styles.image} />
      <View style={{position: 'absolute', left: 8, top: 8}}>
        <Text style={{color: '#ffffff', fontSize: 12}}>{item.nickname}</Text>
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
