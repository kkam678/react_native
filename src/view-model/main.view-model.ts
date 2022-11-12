import {plainToInstance} from 'class-transformer';
import {makeObservable, observable} from 'mobx';
import {apiHost} from '../config/constants';
import {FollowDto} from '../dto/follow.dto';
import {ModelDto} from '../dto/model.dto';
import {SiteCategoryDto} from '../dto/site-category.dto';
import {VodDto} from '../dto/vod.dto';
import {ApiModule} from '../module/api.module';

export class MainViewModel {
  public live: VodDto[] = [];
  public follow: FollowDto[] = [];
  public category: SiteCategoryDto[] = [];
  public hotModel: ModelDto[] = [];
  public model: ModelDto[] = [];
  constructor(props?: any) {
    makeObservable(this, {
      live: observable,
      follow: observable,
      category: observable,
      hotModel: observable,
      model: observable,
    });
  }

  async requestList() {
    const response = await ApiModule.get<any>(`main`);
    const {data} = response;
    const {live, follow, category, hot_model, model} = data;

    if (live.length > 0) {
      this.live = live.map((item: object) => plainToInstance(VodDto, item));
    }
    console.log(this.live);
  }

  async verifyAuthToken(): Promise<void> {}
}
