import React from 'react';
import {TextInput} from 'react-native'

const MytextInput = ({placeholder,style},ref) =>{
    return (
        <TextInput placeholder={placeholder} ref={ref} style={style} /> 
    )
}
const forwardTextInput = React.forwardRef(MytextInput)
export default forwardTextInput;