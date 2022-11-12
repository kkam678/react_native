import {Type} from 'class-transformer';
import {FanDto} from './fan.dto';

export class ModelDto {
  id: number;
  site_key: number;
  nickname: string;
  birth: string;
  profile_image: string;
  star_cnt: number;
  is_follow: boolean;
  instagram_auto: boolean;
  youtube_auto: boolean;
  introduce: string;
  weight: number;
  height: number;
  age: number;
  hobby: string;
  career: string;
  agency_id: number;
  agency_name: string;
  is_shop_supplier: boolean;
  follower_cnt: number;
  following_cnt: number;
  vod_cnt: number;
  feed_cnt: number;
  pictorial_cnt: number;
  subscription_cnt: number;
  total_contents_cnt: number;
  @Type(() => FanDto)
  fan?: FanDto;
}
