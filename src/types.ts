import type { StyleProp, ViewStyle } from 'react-native';

import type { Language } from './locals';

export type Coordinate = {
  latitude: number;
  longitude: number;
};

export type Location = {
  latitude: number;
  longitude: number;
  heading: number;
  accuracy: number;
};

export type NativeEvent<T> = {
  nativeEvent: T;
};

export type RouteProgress = {
  distanceTraveled: number;
  durationRemaining: number;
  fractionTraveled: number;
  distanceRemaining: number;
};

export type MapboxError = {
  message?: string;
};

export type NativeEventsProps = {
  onLocationChange?: (event: NativeEvent<Location>) => void;
  onRouteProgressChange?: (event: NativeEvent<RouteProgress>) => void;
  onError?: (event: NativeEvent<MapboxError>) => void;
  onCancelNavigation?: () => void;
  onArrive?: () => void;
};

export interface MapboxNavigationProps {
  style?: StyleProp<ViewStyle>;
  mute?: boolean;
  showCancelButton?: boolean;

  vehicleHeight?: number;  // Dodaj prop za visinu vozila
  vehicleWeight?: number;  // Dodaj prop za težinu vozila
  vehicleWidth?: number;   // Dodaj prop za širinu vozila
  vehicleLength?: number;  // Dodaj prop za dužinu vozila
  startOrigin: Coordinate;
  waypoints?: Coordinate[];
  separateLegs?: boolean;
  destination: Coordinate & { title?: string };
  language?: Language;
  distanceUnit?: 'metric' | 'imperial';
  /**
   * [iOS only]
   * @Default false
   */
  showsEndOfRouteFeedback?: boolean;

  /**
   * Hide status of bar on navigation [iOS only]
   * @Default false
   */
  hideStatusView?: boolean;

  /**
   * Location simulation for debug.
   * @Default false
   * @available iOS
   * @android Planned for next release
   */
  shouldSimulateRoute?: boolean;

  onLocationChange?: (location: Location) => void;
  onRouteProgressChange?: (progress: RouteProgress) => void;
  onError?: (error: MapboxError) => void;
  onCancelNavigation?: () => void;
  onArrive?: () => void;
}
