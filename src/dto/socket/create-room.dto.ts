import {Type} from 'class-transformer';
import {BaseSocketDto} from './base-socket.dto';
import {SocketUserDto} from './socket-user.dto';

export class CreateRoomDto extends BaseSocketDto {
  bookmark_cnt: number;
  favorite_cnt: number;
  live_target: string;
  result: boolean;
  stream_url: string;
  vod_key: number;
  @Type(() => SocketUserDto)
  user: SocketUserDto;
}
