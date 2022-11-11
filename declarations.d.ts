declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module 'react-native-nodemediaclient' {
  /**
   *
   * video 옵션 preset 에 대한 참고
   *
   * public static final int VIDEO_PPRESET_16X9_270 = 0;
   * public static final int VIDEO_PPRESET_16X9_360 = 1;
   * public static final int VIDEO_PPRESET_16X9_480 = 2;
   * public static final int VIDEO_PPRESET_16X9_540 = 3;
   * public static final int VIDEO_PPRESET_16X9_720 = 4;
   * public static final int VIDEO_PPRESET_16X9_1080 = 5;
   *
   * public static final int VIDEO_PPRESET_4X3_270 = 10;
   * public static final int VIDEO_PPRESET_4X3_360 = 11;
   * public static final int VIDEO_PPRESET_4X3_480 = 12;
   * public static final int VIDEO_PPRESET_4X3_540 = 13;
   * public static final int VIDEO_PPRESET_4X3_720 = 14;
   * public static final int VIDEO_PPRESET_4X3_1080 = 15;
   *
   * public static final int VIDEO_PPRESET_1X1_270 = 20;
   * public static final int VIDEO_PPRESET_1X1_360 = 21;
   * public static final int VIDEO_PPRESET_1X1_480 = 22;
   * public static final int VIDEO_PPRESET_1X1_540 = 23;
   * public static final int VIDEO_PPRESET_1X1_720 = 24;
   * public static final int VIDEO_PPRESET_1X1_1080 = 25;
   *
   * public static final int AUDIO_PROFILE_LCAAC = 0;
   * public static final int AUDIO_PROFILE_HEAAC = 1;
   *
   * public static final int VIDEO_PROFILE_BASELINE = 0;
   * public static final int VIDEO_PROFILE_MAIN = 1;
   * public static final int VIDEO_PROFILE_HIGH = 2;
   *
   * public static final int CAMERA_BACK = 0;
   * public static final int CAMERA_FRONT = 1;
   *
   * public static final int NM_PIXEL_BGRA = 1;
   * public static final int NM_PIXEL_RGBA = 2;
   *
   * public static final int NM_LOGLEVEL_ERROR = 0;
   * public static final int NM_LOGLEVEL_INFO = 1;
   * public static final int NM_LOGLEVEL_DEBUG = 2;
   */
  import {NodeCameraView} from 'react-native-nodemediaclient';
  export {NodeCameraView};
}
