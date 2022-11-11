import React, {createRef, useEffect, useRef, useState} from 'react';
import {Alert, BackHandler, Linking, StyleSheet} from 'react-native';
import {Text, TextInput, View, Button, Platform, PermissionsAndroid} from 'react-native';

import {NodeCameraView} from 'react-native-nodemediaclient';
import {useIsFocused} from '@react-navigation/native';
import {io} from 'socket.io-client';
import {getModel} from 'react-native-device-info';
import {socketServerHost} from '../config/constants';
import {SocketSendParam} from '../model/socket/socket-send-param';
import {CreateRoom} from '../model/socket/create-room';
import {CreateRoomDto, CreateRoomResponse} from '../dto/socket/create-room.dto';
import {SocketDtoFactory} from '../factory/socket-dto.factory';

interface AudioProps {
  bitrate: number;
  profile: number;
  samplerate: number;
}

export default function LiveSettingScreen(props: any) {
  const {navigation} = props;

  const [isConnected, setIsConnected] = useState(false);
  const [modelInfo, setModelInfo] = useState<string>('info');
  const [pushserver, setPushserver] = useState<string>(``);
  const [permission, setPermission] = useState<boolean>(false);
  const [playerRef, setPlayerRef] = useState<any>(undefined);
  const [cameraPreview, setCameraPreview] = useState<boolean>(false);
  const [dto, setDto] = useState({});
  const [audioPreview, setAudioPreview] = useState<AudioProps>({
    bitrate: 32000,
    profile: 1,
    samplerate: 44100,
  });
  const isFocused = useIsFocused();
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
      if (
        granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        setPermission(true);
        setCameraPreview(true);
        console.log('You can use the camera');
      } else {
        Alert.alert(
          '권한이 거부되었습니다',
          '카메라와 마이크 권한 없이 앱이 비디오 및 오디오를 캡쳐할 수 없습니다.',
          [
            {text: '취소'},
            {
              text: '설정으로 바로 가기',
              onPress: () => Linking.openSettings(),
            },
          ],
        );
        setPermission(false);
        setCameraPreview(false);
      }
    } catch (err) {
      Alert.alert('실패:: 권한 요청에 문제가 있습니다.');
      console.warn(err);
    }
  };

  const socket = React.useRef(new WebSocket(`ws://${socketServerHost}:8000/wsock`)).current;
  const handlePressStartLive = () => {
    console.log('dto', dto);
    navigation.navigate('LiveStart', dto);
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCameraPermission();
    }
    socket.onopen = () => {
      setIsConnected(true);
      socket.send(
        new CreateRoom({
          site_key: 31,
          user_string: '104070',
          subject: 'TEST',
          screen_type: 2,
          device_type: 2,
          device_info: 'SM-A336N',
          show_state: 1,
          width: 720,
          height: 1280,
        }).toJson(),
      );
      console.log('WebSocket OPEN!!');
    };
    socket.onmessage = (e: any) => {
      try {
        const message = JSON.parse(e.data);
        const {type, data} = message;
        const dto = SocketDtoFactory.make<CreateRoomResponse>(type, data);
        setDto(dto);
      } catch (e) {
        console.log(e);
      }
    };

    socket.onclose = (e: any) => {
      console.log('WebSocket Close');
    };

    socket.onerror = (e: any) => {
      setIsConnected(false);
      console.log('ERROR!!', e);
    };
    navigation.addListener('beforeRemove', (e: any) => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();

      // Prompt the user before leaving the screen
      Alert.alert('종료', '방송을 종료하시겠습니까?', [
        {text: '취소', style: 'cancel', onPress: () => {}},
        {
          text: '종료',
          style: 'destructive',
          // If the user confirmed, then we dispatch the action we blocked earlier
          // This will continue the action that had triggered the removal of the screen
          onPress: () => {
            navigation.dispatch(e.data.action);
          },
        },
      ]);
    });

    return () => {
      if (playerRef) playerRef.stop();
      setCameraPreview(false);
      setAudioPreview({
        bitrate: 0,
        profile: 0,
        samplerate: 8000,
      });
      socket.close();
    };
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: '#333'}}>
      {permission && isFocused ? (
        <NodeCameraView
          style={{flex: 1}}
          ref={(vb: any) => {
            setPlayerRef(vb);
          }}
          outputUrl={pushserver}
          //cameraId: 0 후면, cameraId: 1 전면
          camera={{cameraId: 1, cameraFrontMirror: true}}
          audio={audioPreview}
          video={{
            preset: 4,
            bitrate: 500000,
            profile: 0,
            fps: 30,
            videoFrontMirror: false,
          }}
          smoothSkinLevel={3}
          autopreview={cameraPreview}
          onStatus={(code: any, msg: any) => {
            console.log('onStatus=' + code + ' msg=' + msg);
          }}
        />
      ) : (
        <View>
          <Text>권한이 거부되었습니다</Text>
          <Text>카메라와 마이크 권한 없이 앱이 비디오 및 오디오를 캡쳐할 수 없습니다.</Text>
          <Button
            onPress={() => {
              Linking.openSettings();
            }}
            color="#333333"
            title="설정"
          />
        </View>
      )}
      <View>
        <Text>Connected: {'' + isConnected}</Text>
      </View>
      <View>
        <Button onPress={handlePressStartLive} color="red" title="Start Live" />
        <Button
          onPress={() => {
            playerRef.switchCamera();
          }}
          color="red"
          title="Reverse Camera"
        />
        <Button
          onPress={() => {
            playerRef.start();
          }}
          color="green"
          title="Publish"
        />
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title="Back"
        />
      </View>
    </View>
  );
}
