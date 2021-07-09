import React, { useState, useRef,useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

const UseRefHook = () => {
    const [count, setCount] = useState(0)
    const inputRef = useRef(count)
    useEffect(()=>{
        inputRef.current = count;
    },[count])
    return (
        <View>
            <Text>helloWorld</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableOpacity onPress={()=> setCount(count + 1)} style={{ height: 50, width: 50, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>UP</Text>
                </TouchableOpacity>
                <Text>{count}</Text>
            </View>
            <Text>{inputRef.current }</Text>
            <Text>{count}</Text>
        </View>

    )
}
export default UseRefHook;

