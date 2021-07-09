import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { UseContextValue,UseChangeContextValue } from './index';
const UseContext = () => {
    const { count, setCount, Down } = useContext(UseContextValue)
    const change = useContext(UseChangeContextValue)
    console.log(change)
    return (
        <View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 20, justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => setCount(count + 1)} style={{ height: 50, backgroundColor: 'green', width: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text> Up</Text>
                </TouchableOpacity>
                <Text>
                    {count}
                </Text>
                <TouchableOpacity onPress={() => setCount(count - 1)} style={{ height: 50, backgroundColor: 'green', width: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text> Down</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Down()} style={{ height: 50, backgroundColor: 'green', width: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text> Downpractice</Text>
                </TouchableOpacity>
            </View>
            <Text style={{color:'white',height:40,backgroundColor:'green',marginTop:10}}>{change}</Text>
        </View>

    )
}
export default UseContext;