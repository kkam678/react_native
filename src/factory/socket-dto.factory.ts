import {CreateRoomDto} from '../dto/socket/create-room.dto';
import {SocketType} from '../model/socket/socket-send-param';

export class SocketDtoFactory {
  public static make<T>(type: SocketType, data: T) {
    let dto = null;
    switch (type) {
      case 'io.agora.ws.CreateRoom':
        dto = new CreateRoomDto(data);
        break;
    }
    return dto;
  }
}
