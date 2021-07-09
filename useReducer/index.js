import React, { useReducer } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

const UseReducerHook = () => {
    const initalState = {
        counter:0
    };
    const reducer = (state,action)=>{
        switch(action.type){
            case 'Increment':
                return {
                    ...state,counter:state.counter + 1
                }
            case 'Decrement':
                return {
                    ...state,counter:state.counter - 1
                }
            default:
                return state;
        }
    }
    const [count,dispatchq] = useReducer(reducer,initalState)
    return (
        <View>
            <Text style={{textAlign:'center'}}>{count.counter}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <TouchableOpacity 
                    onPress={()=>dispatchq({type:'Increment'})}
                    style={{ height: 50, backgroundColor: 'green', width: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>UP</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>dispatchq({type:'Decrement'})}
                    style={{ height: 50, backgroundColor: 'green', width: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Down</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default UseReducerHook;