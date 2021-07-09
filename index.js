/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import UseContext from './UseContext/index';
import UseReducerHook from './useReducer/index'
import FetDataUserReducer from './useReducer/FetDataUserReducer'
import UseRefHook from './useRef/index'
import TextInputRef from './useRef/TextInputRef'
import UseCallbackHook from './useCallback/index'
import UseMemoHook from './useMemo/index'
import RootApp from './RootApp'
AppRegistry.registerComponent(appName, () => RootApp);
