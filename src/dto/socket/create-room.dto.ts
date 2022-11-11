import {BaseSocketDto} from './base-socket.dto';

export interface SocketUser {
  admin_flag: boolean;
  fan_grade: number;
  freepass: boolean;
  freeze: boolean;
  guest_yn: number;
  is_bj: boolean;
  is_like: boolean;
  is_manager: boolean;
  nickname: string;
  profile_image: string;
  site_key: number;
  user_key: number;
}

export interface CreateRoomResponse {
  bookmark_cnt: number;
  favorite_cnt: number;
  live_target: string;
  result: boolean;
  stream_url: string;
  vod_key: number;
  user: SocketUser;
}
export class CreateRoomDto extends BaseSocketDto {
  private bookmark_cnt: number;
  private favorite_cnt: number;
  private live_target: string;
  private result: boolean;
  private stream_url: string;
  private vod_key: number;
  private user: SocketUser;
  constructor(props: CreateRoomResponse) {
    super();
    this.bookmark_cnt = props.bookmark_cnt;
    this.favorite_cnt = props.favorite_cnt;
    this.live_target = props.live_target;
    this.result = props.result;
    this.stream_url = props.stream_url;
    this.vod_key = props.vod_key;
    this.user = props.user;
  }

  public getBookmarkCnt(): number {
    return this.bookmark_cnt;
  }
  public getFavoriteCnt(): number {
    return this.favorite_cnt;
  }
  public getLiveTarget(): string {
    return this.live_target;
  }
  public getResult(): boolean {
    return this.result;
  }
  public getStreamUrl(): string {
    return this.stream_url;
  }
  public getVodKey(): number {
    return this.vod_key;
  }
  public getUser(): SocketUser {
    return {...this.user};
  }
}
