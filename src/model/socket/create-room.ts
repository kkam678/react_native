import {ISocketData} from './isocket-data';
import {SocketSendParam, SocketType} from './socket-send-param';

//1: landscape, 2: portrait
export type ScreenType = 1 | 2;
//0: PC, 1: Android, 2: IOS
export type DeviceType = 0 | 1 | 2;

export interface CreateRoomProps {
  site_key: number;
  user_string: string;
  subject: string;
  screen_type: ScreenType;
  device_type: DeviceType;
  device_info: string;
  show_state: number;
}
export class CreateRoom extends SocketSendParam implements ISocketData {
  public site_key: number = 0;
  public user_string: string = '';
  public subject: string = '';
  public screen_type: ScreenType = 2;
  public device_type: DeviceType = 2;
  public device_info: string = '';
  public show_state: number = 1;

  constructor(props: CreateRoomProps) {
    super('io.agora.ws.CreateRoom', props);
    Object.assign(this, props);
  }
}
