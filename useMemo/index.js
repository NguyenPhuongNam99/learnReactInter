import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Children from './Children'
const UseMemoHook = () => {
    const [count,setCount ] = useState(0)
    const Up =()=>{
        setCount(count +1)
    }
    return (
        <View>
            <TouchableOpacity 
                onPress={Up}
                style={{height:50,marginTop:20,marginHorizontal:10,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                <Text>{count}</Text>
            </TouchableOpacity>
            <Children></Children>
        </View>
    )
}
export default UseMemoHook;