import {plainToInstance} from 'class-transformer';
import {action, makeAutoObservable, makeObservable, observable, runInAction, toJS} from 'mobx';
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
    // makeObservable(this, {
    //   live: observable,
    //   follow: observable,
    //   category: observable,
    //   hotModel: observable,
    //   model: observable,
    //   requestList: action,
    // });
    makeAutoObservable(this);
  }

  async requestList() {
    const response = await ApiModule.get<any>(`main`);
    runInAction(() => {
      const {data} = response;
      const {live, follow, category, hot_model, model} = data;
      if (follow.length > 0) {
        this.follow = [];
        this.follow = live.map((item: object) => plainToInstance(FollowDto, item));
      }
      if (category.length > 0) {
        this.category = [];
        this.category = live.map((item: object) => plainToInstance(SiteCategoryDto, item));
      }
      if (live.length > 0) {
        this.live = [];
        this.live = live.map((item: object) => plainToInstance(VodDto, item));
      }
      if (hot_model.length > 0) {
        this.hotModel = [];
        this.hotModel = hot_model.map((item: object) => plainToInstance(ModelDto, item));
      }
      if (model.length > 0) {
        this.model = [];
        this.model = model.map((item: object) => plainToInstance(ModelDto, item));
      }
    });
  }

  async verifyAuthToken(): Promise<void> {}
}
