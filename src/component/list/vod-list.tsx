import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {VodDto} from '../../dto/vod.dto';
import {Color} from '../../style/color.config';
import CircleImage from '../image/circle-image.ui';

interface IProps {
  item: VodDto;
  index: number;
}
export function VodMainList(props: IProps) {
  const {item, index} = props;
  return (
    <View
      style={
        (styles.container,
        {
          marginLeft: index === 0 ? 16 : 8,
        })
      }>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.info}>
        <View>
          <CircleImage isLast={false} source={{uri: item.profile_image}} width={24} height={24} />
        </View>
        <View style={{marginLeft: 4}}>
          <Text style={{color: Color.black}}>{item.nickname}</Text>
        </View>
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
