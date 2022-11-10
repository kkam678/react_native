import React, {createRef, useEffect, useState} from 'react';
import {Alert, BackHandler, StyleSheet} from 'react-native';
import {ILoginViewModel} from '../../domain/use-case/ilogin.view-model.';
import {BasePresenter} from './base.presenter';
import {inject} from 'mobx-react';
import {
  Text,
  TextInput,
  View,
  Button,
  Platform,
  PermissionsAndroid,
} from 'react-native';

import {NodeCameraView} from 'react-native-nodemediaclient';
import {useIsFocused} from '@react-navigation/native';

export default function LivePresenter(props: any) {
  const {navigation} = props;

  const [permission, setPermission] = useState<boolean>(false);
  const [pushserver, setPushserver] = useState<string>(
    'https://mtest.livek.tv/live/',
  );
  const [playerRef, setPlayerRef] = useState<any>(undefined);
  const [cameraPreview, setCameraPreview] = useState<boolean>(false);
  const isFocused = useIsFocused();
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
      if (
        granted['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.CAMERA'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        setPermission(true);
        setCameraPreview(true);
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
        setPermission(false);
        setCameraPreview(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCameraPermission();
      console.log('PLAYER REF@@@@@@@@@@@@@', playerRef);
    }

    navigation.addListener('beforeRemove', e => {
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
            if (playerRef) playerRef.stop();
            setCameraPreview(false);
            navigation.dispatch(e.data.action);
          },
        },
      ]);
    });
    return () => {};
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
          //cameraId: 0 후면, cameraId: 1 wjks
          camera={{cameraId: 1, cameraFrontMirror: true}}
          audio={{bitrate: 32000, profile: 1, samplerate: 44100}}
          video={{
            preset: 1,
            bitrate: 500000,
            profile: 1,
            fps: 30,
            videoFrontMirror: false,
          }}
          smoothSkinLevel={3}
          autopreview={cameraPreview}
          onStatus={(code: any, msg: any) => {
            console.log('onStatus=' + code + ' msg=' + msg);
          }}
        />
      ) : null}
      <View>
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

// export class LivePresenter extends BasePresenter<any, any> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       playserver: 'https://mtest.livek.tv/live/',
//       stream: 'https://mtest.livek.tv/live/',
//       pushserver: 'https://mtest.livek.tv/live/',
//       playerRef: null,
//       permission: false,
//     };
//     console.log(this.state.playerRef);
//   }
//   async requestCameraPermission() {
//     try {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//       ]);
//       if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
//         this.setState({
//           permission: true,
//         });
//         console.log('You can use the camera');
//       } else {
//         console.log('Camera permission denied');
//         this.setState({
//           permission: false,
//         });
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   }

//   async componentDidMount() {
//     await this.requestCameraPermission();
//   }

//   setPlayer = async (vb: any) => {
//     this.setState({playerRef: vb});
//   };

//   componentWillUnmount() {
//     this.state.playerRef.stop();
//   }

//   render() {
//     const props = this.props;
//     return (
//       <View style={{flex: 1, backgroundColor: '#333'}}>
//         {this.state.permission ? (
//           <NodeCameraView
//             style={{flex: 1}}
//             ref={this.setPlayer}
//             outputUrl={this.state.pushserver}
//             //cameraId: 0 후면, cameraId: 1 wjks
//             camera={{cameraId: 0, cameraFrontMirror: true}}
//             audio={{bitrate: 32000, profile: 1, samplerate: 44100}}
//             video={{
//               preset: 1,
//               bitrate: 500000,
//               profile: 1,
//               fps: 30,
//               videoFrontMirror: false,
//             }}
//             smoothSkinLevel={3}
//             autopreview={true}
//             onStatus={(code: any, msg: any) => {
//               console.log('onStatus=' + code + ' msg=' + msg);
//             }}
//           />
//         ) : null}
//         <View>
//           <Button
//             onPress={() => {
//               this.state.playerRef.switchCamera();
//             }}
//             color="red"
//             title="Reverse Camera"
//           />
//           <Button
//             onPress={() => {
//               this.state.playerRef.start();
//             }}
//             color="green"
//             title="Publish"
//           />
//           <Button
//             onPress={() => {
//               props.navigation.goBack();
//             }}
//             title="Back"
//           />
//         </View>
//       </View>
//     );
//   }
// }
