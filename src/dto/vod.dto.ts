export type VodType = 1 | 2 | 3;
export class VodDto {
  id: number;
  user_id: number;
  state: number;
  nickname: string;
  profile_image: string;
  site_key: number;
  type: VodType;
  category_id: number;
  category_title: string;
  title: string;
  image: string;
  visit_cnt: number;
  duration: number;
  like_cnt: number;
  is_adult: boolean;
  is_password: boolean;
  gold_cnt: number;
  fan_grade: number;
  screen_type: number;
  created_at: string;
  started_at: string;
}
