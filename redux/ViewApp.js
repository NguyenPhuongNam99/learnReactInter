import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, combimeIncre } from './counter'
const ViewApp = () => {
    const { count } = useSelector((state) => state.counter)
    const distpatch = useDispatch()
    return (
        <View>
            <Text>hello world</Text>
            <TouchableOpacity>
                <Text> {count} </Text>
            </TouchableOpacity>
            <View style={{marginHorizontal:10}}>
                <TouchableOpacity 
                    onPress={()=>distpatch(increment())}
                    style={{height:30,backgroundColor:'green',marginTop:10,justifyContent:'center',alignItems:'center'}}>
                    <Text>UP</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>distpatch(decrement())}
                    style={{height:30,backgroundColor:'green',marginTop:10,justifyContent:'center',alignItems:'center'}}>
                    <Text>Down</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>distpatch(combimeIncre(33))}
                    style={{height:30,backgroundColor:'green',marginTop:10,justifyContent:'center',alignItems:'center'}}>
                    <Text>CombineUP</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default ViewApp;