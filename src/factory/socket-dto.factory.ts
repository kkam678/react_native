import {plainToInstance} from 'class-transformer';
import {CreateRoomDto} from '../dto/socket/create-room.dto';
import {SocketType} from '../model/socket/socket-send-param';

export class SocketDtoFactory {
  public static make<T>(type: SocketType, data: T): T {
    let dto: any;
    switch (type) {
      case 'io.agora.ws.CreateRoom':
        dto = plainToInstance<any, T>(CreateRoomDto, data);
        break;
    }
    return dto;
  }
}
