import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ModelDto} from '../../../dto/model.dto';
import {Color} from '../../../style/color.config';
import CircleImage from '../../image/circle-image.ui';
interface IProps {
  item: ModelDto;
  index: number;
}
export function ModelList(props: IProps) {
  const {item, index} = props;
  const numCols = 2;
  return (
    <View
      style={
        (styles.container,
        {
          marginLeft: index % numCols !== 0 ? 2 : 0,
          marginBottom: 2,
        })
      }>
      <Image source={{uri: item.profile_image}} style={styles.image} />
      <View style={{position: 'absolute', left: 8, bottom: 32}}>
        <Text style={{color: '#ffffff', fontSize: 12}}>{item.nickname}</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          left: 8,
          right: 8,
          display: 'flex',
          bottom: 8,
          width: '90%',
          borderRadius: 4,
          padding: 2,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <Text style={{color: '#ffffff', fontSize: 12}}>{item.introduce}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
  },
  info: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
});
