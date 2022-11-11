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

import {ISocketData} from './isocket-data';

export type SocketType =
  | 'io.agora.ws.CreateRoom'
  | 'io.agora.ws.ReCreateRoom'
  | 'io.agora.ws.JoinRoom'
  | 'io.agora.ws.SendRoomMessage'
  | 'io.agora.ws.ByeRoom';

export class SocketSendParam {
  public type: SocketType;
  public data: ISocketData;

  constructor(type: SocketType, data: ISocketData) {
    this.type = type;
    this.data = data;
  }

  toJson(): string {
    return JSON.stringify(this);
  }
}
