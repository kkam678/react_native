/**
 * SocketType
 *
 * 1. io.agora.ws.CreateRoom : 방 만들기
 * 2. io.agora.ws.ReCreateRoom : 방 만들기(재접속용)
 * 3. io.agora.ws.JoinRoom : 방 참여
 * 4. io.agora.ws.SendRoomMessage : 방 메시지 전송
 * 5. io.agora.ws.ByeRoom : 방 나가기
 *
 */

import {DeviceType} from 'react-native-device-info';
import {ScreenType} from './create-room';
import {ISocketParam} from './isocket-param';

export interface CreateRoomProps {
  site_key: number;
  user_string: string;
  subject: string;
  screen_type: ScreenType;
  device_type: DeviceType;
  device_info: string;
  show_state: number;
  width: number;
  height: number;
}

export class SocketParam<T extends ISocketParam> {
  public type: string;
  public data: T;

  constructor(data: T) {
    this.type = data.getType();
    this.data = data;
  }

  toJson(): string {
    return JSON.stringify(this);
  }
}
