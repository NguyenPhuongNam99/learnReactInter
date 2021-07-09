import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import ChildContext from './ChildContext'
export const UseContextValue = React.createContext()
export const UseChangeContextValue = React.createContext()
const UseContext = () => {
    const [count, setCount] = useState(0)
    const [change,setChange] = useState('HelloWorld')
    const Up =()=>{
        setCount(count+1)
    }
    const Down = () => {
        setCount(count - 1)
    }
    const value = { count, setCount, Down };
    return (
        <UseContextValue.Provider
            value={value}
        >
            <UseChangeContextValue.Provider value={change}>
                <ChildContext />
                <TouchableOpacity 
                    style={{width:50,height:50,flexDirection:'row'}} 
                    onPress={Up}
                >
                    <Text>UpPro {count}</Text>
                </TouchableOpacity>
            </UseChangeContextValue.Provider>
        </UseContextValue.Provider>


    )
}
export default UseContext;

//useContext chia ser value..bất kể đâu cũng có thể cập nhật được state

//khởi tạo useContext bằng React.creatContext==>export
//childComponent call value ==> const variable = useContext(contextByme)