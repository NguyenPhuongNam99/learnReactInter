import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
const Touchable = ({handleClick,children}) => {
    console.log('Rending button',children)
    return (
        <TouchableOpacity
            onPress={handleClick}
            style={{ height: 50, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
        >
            <Text style={{ color: 'white' }}>{children}</Text>
        </TouchableOpacity>
    )
}
export default React.memo(Touchable)