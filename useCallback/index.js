import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Touchable from './Touchable'
const UseCallbackHook = () => {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(0)
    const handleCount = useCallback(async() => {

        setCount(count + 1);
    }, [count])
    const handleSetAge = useCallback(() => {
        setAge(age + 1)
    },[age])
    return (
        <View>
            <Text>Hello world</Text>
            <Touchable handleClick={handleCount}>Count</Touchable>
            <Touchable handleClick={handleSetAge}>Agxxxxxe</Touchable>
           
        </View>
    )
}
export default UseCallbackHook;

//khởi tạo state = count 
//usecallback xử lý handleCount với dependencies là count ==>thì chỉ khi count
// thay đổi thì hàm mới gọi lại và ngược lại
//vì một component có nhiều state khi các state kia thay đổi
//component re-render lại..mà sử dụng useCallback thì nó sẽ ko render lại hàm đó

//usememo là để lưu ra giá trị của một function trả về
//tránh data bị re-render lại


//usecallback là lưu thông tin của cả hàm
//usememo là lưu value của function trả về
// const memories = useMemo(()=>{
//     <ComponentChild />
// })

//khi component cha bị re-render thì ComponentChild con ko bị render value

//customhook
// thay vì những màn cần call API ( đều co điểm chung là useEffect và fetch) thì
//viết custoomHook Fetch 

// useEffect(()=>{
//     fetch('')
//         .then((response)=>response.json())
//         .then((responseJson)=>setData(responseJson))
//         .catch
// })
    // return Data;

//Vậy bất kì filr nào cần fetchData thì chỉ cần gọi useFetchData
