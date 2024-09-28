# @eraka93/react-native-mapbox-navigation-truck <br/>[![npm](https://img.shields.io/npm/v/%40eraka93%2Freact-native-mapbox-navigation-truck)](https://www.npmjs.com/package/@eraka93/react-native-mapbox-navigation-truck) [![Build status](https://img.shields.io/github/actions/workflow/status/eraka93/react-native-mapbox-navigation-truck/ci.yml?branch=main&label=tests)](https://github.com/eraka93/react-native-mapbox-navigation-truck/actions) [![npm](https://img.shields.io/npm/dw/%40eraka93%2Freact-native-mapbox-navigation-truck)](https://www.npmjs.com/package/@eraka93/react-native-mapbox-navigation-truck)

Mapbox React Native SDKs enable interactive maps and real-time, traffic-aware turn-by-turn navigation, dynamically adjusting routes to avoid congestion. This version adds truck-specific navigation features.

🆕&nbsp; Uses Mapbox navigation v3 SDK<br>
📱&nbsp; Supports iOS, Android<br>
🌍&nbsp; Various languages<br>
🎨&nbsp; Customizable<br>
⛕&nbsp; Multiple Waypoints<br>
🚘&nbsp; iOS CarPlay Support<br>
🚚&nbsp; Truck-specific navigation options (height, weight, width, length)

<a href="https://www.buymeacoffee.com/eraka93" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Truck Navigation Options Added

This package has been extended by [Milan Erakovic](https://github.com/eraka93) to include options for truck navigation, such as vehicle height, weight, width, and length. These options are useful for calculating routes that consider vehicle dimensions and restrictions on roads.

The extended features include:

- `vehicleHeight`: The height of the truck in meters.
- `vehicleWeight`: The weight of the truck in tons.
- `vehicleWidth`: The width of the truck in meters.
- `vehicleLength`: The length of the truck in meters.

## Route View

<table>
   <tr>
  <td><img src="docs/route-view-ios.png" alt="Turn by turn Navigation iOS" height="400px" style="margin-left:10px" /></td>
        <td><img src="docs/route-view-android.png" alt="Turn by turn Navigation Android" height="400px" style="margin-left:10px" />
    </td>
  </tr>
      <tr>
  <td align="center">iOS</td><td align="center">Android</td>
  </tr>
  </table>

## Turn by turn Navigation View

<table>
   <tr>
  <td><img src="docs/navigation-view-ios.png" alt="Turn by turn Navigation iOS" height="400px" style="margin-left:10px" /></td>
        <td><img src="docs/navigation-view-android.png" alt="Turn by turn Navigation Android" height="400px" style="margin-left:10px" />
    </td>
  </tr>
      <tr>
  <td align="center">iOS</td><td align="center">Android</td>
  </tr>
  </table>

## Installation

### 1. Download package

```sh
# yarn
yarn add @eraka93/react-native-mapbox-navigation-truck

# npm
npm install @eraka93/react-native-mapbox-navigation-truck

## iOS Specific Instructions

1. Place your secret token in a .netrc file in your OS root directory.

   ```
   machine api.mapbox.com
   login mapbox
   password <INSERT SECRET TOKEN>
   ```

2. Install pods

   ```
   cd ios && pod install
   ```

3. Place your public token in your Xcode project's `Info.plist` and add a `MBXAccessToken` key whose value is your public access token.

4. Add the `UIBackgroundModes` key to `Info.plist` with `audio` and `location` if it is not already present. This will allow your app to deliver audible instructions while it is in the background or the device is locked.

   ```
   <key>UIBackgroundModes</key>
   <array>
     <string>audio</string>
     <string>location</string>
   </array>
   ```

## Android Specific Instructions

1. Place your secret token in your android app's top level `gradle.properties` or `«USER_HOME»/.gradle/gradle.properties` file

   ```
   MAPBOX_DOWNLOADS_TOKEN=<YOUR_MAPBOX_DOWNLOADS_TOKEN>
   ```

2. Open up your _project-level_ `build.gradle` file. Declare the Mapbox Downloads API's `releases/maven` endpoint in the _allprojects_ `repositories` block.

   ```gradle
   allprojects {
       repositories {
           maven {
                 url 'https://api.mapbox.com/downloads/v2/releases/maven'
                 authentication {
                     basic(BasicAuthentication)
                 }
                 credentials {
                   // Do not change the username below.
                   // This should always be `mapbox` (not your username).
                     username = "mapbox"
                     // Use the secret token you stored in gradle.properties as the password
                     password = project.hasProperty('MAPBOX_DOWNLOADS_TOKEN') ?: ""
                 }
             }
       }
   }
   ```

3. Add Resources<br/>
   To do so create a new string resource file in your app module `(e.g. app/src/main/res/values/mapbox_access_token.xml)` with your public Mapbox API token:

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
    <resources xmlns:tools="http://schemas.android.com/tools">
        <string name="mapbox_access_token" translatable="false" tools:ignore="UnusedResources">YOUR_MAPBOX_ACCESS_TOKEN</string>
    </resources>
   ```

   For more details installation you can read the [Official docs of Mapbox](https://docs.mapbox.com/android/navigation/guides/installation).

## Usage

```js
import MapboxNavigation from '@eraka93/react-native-mapbox-navigation-truck';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <MapboxNavigation
      startOrigin={{ latitude: 30.699239, longitude: 76.6905161 }}
      destination={{ latitude: 30.6590196, longitude: 76.8185852 }}
      waypoints={[
        { latitude: 30.726848, longitude: 76.733758 },
        { latitude: 30.738819, longitude: 76.757902 },
      ]}
      vehicleHeight={4.0}
      vehicleWeight={20.0}
      vehicleWidth={2.5}
      vehicleLength={12.0}
      style={styles.container}
      shouldSimulateRoute={false}
      showCancelButton={false}
      language="en"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

```

## `MapboxNavigation` Props

- `startOrigin(Required)` (object): The starting point of the navigation. Should contain latitude and longitude keys.

- `destination(Required)` (object): The destination point of the navigation. Should contain latitude and longitude keys.

- `waypoints` (array): The waypoints for navigation points between startOrigin and destination. Should contains array of latitude and longitude keys.

- `style` (StyleObject): Custom styles for the navigation mapview.

- `vehicleHeight` (number): The height of the truck in meters.

- `vehicleWeight` (number): The weight of the truck in tons.

- `vehicleWidth` (number): The width of the truck in meters.

- `vehicleLength` (number): The length of the truck in meters.

- `shouldSimulateRoute` (boolean): [iOS Only] If true, simulates the route for testing purposes. Defaults to `false`.

- `showCancelButton` (boolean): [Android Only] If true, shows a cancel button on the navigation screen. Defaults to `false`.

- `language` (string): The language for the navigation instructions. Defaults to `en`.

- `distanceUnit` ('metric' | 'imperial'): Unit of direction and voice instructions (default is 'imperial')

- `onLocationChange`: Function that is called frequently during route navigation. It receives `latitude`, `longitude`, `heading` and `accuracy` as parameters that represent the current location during navigation.

- `onRouteProgressChange`: Function that is called frequently during route navigation. It receives `distanceTraveled`, `durationRemaining`, `fractionTraveled`, and `distanceRemaining` as parameters.

- `onError`: Function that is called whenever an error occurs. It receives a `message` parameter that describes the error that occurred.

- `onCancelNavigation`: Function that is called whenever a user cancels navigation.

- `onArrive`: Function that is called when you arrive at the provided destination.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
