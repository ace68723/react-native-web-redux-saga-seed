import { AppRegistry, Platform } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('App', () => App);
if(Platform.OS === 'web')
  AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
