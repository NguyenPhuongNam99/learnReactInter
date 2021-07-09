import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from './userSlice'
const ViewUser = () => {
    const { user } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])
    return (
        <View>
            <View>
                {
                    user && user.map((item)=>{
                        return(
                            <Text key={item.id}> {item.name} </Text>
                        )
                    })
                }
            </View>
        </View>
    )
}
export default ViewUser;