import type { HostComponent, ViewProps } from 'react-native';

import type { NativeEventsProps } from './types';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

type NativeCoordinate = number[];
interface NativeProps extends ViewProps {
  mute?: boolean;
  startOrigin: NativeCoordinate;
  destination: NativeCoordinate;
  showCancelButton?: boolean;
  shouldSimulateRoute?: boolean;
  showsEndOfRouteFeedback?: boolean;
  hideStatusView?: boolean;
}

export default codegenNativeComponent<NativeProps>(
  'MapboxNavigationView'
) as HostComponent<NativeProps & NativeEventsProps>;
