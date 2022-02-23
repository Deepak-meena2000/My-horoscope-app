import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

const isWeb = true;

const AppWraper = () => {
  return <App web={isWeb} />;
};

AppRegistry.registerComponent(appName, () => AppWraper);

AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('react-native-web-app'),
});
