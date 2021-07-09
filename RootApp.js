import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import store from './redux/store'
import {Provider} from 'react-redux'
import ViewApp from './redux/ViewApp'
import ViewUser from './redux/ViewUser'
const RootApp = () => {
  
    return (
      <Provider store={store}>
          {/* <ViewApp /> */}
          <ViewUser />
      </Provider>
    )
}
export default RootApp;