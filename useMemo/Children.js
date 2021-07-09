import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
const Children = () => {
    let renderCount =0;
    useEffect(()=>{
        renderCount ++;
    })
    return (
        <View>
            <Text>RenderCount : {renderCount} </Text>
        </View>
    )
}
export default Children;