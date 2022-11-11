import LocalizedStrings from 'react-localization';
import kr from '../config/lang/kr';
import {Component} from 'react';
export class BaseScreen<Props, State> extends Component<Props, State> {
  protected readonly lang;
  constructor(props: Props) {
    super(props);
    this.lang = new LocalizedStrings({
      kr: kr(),
    });
    this.lang.setLanguage('kr');
  }
}
