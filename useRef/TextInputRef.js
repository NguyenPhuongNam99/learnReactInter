import React, { useState,useRef,useEffect } from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native'
import MyTextInput from './MytextInput'
const TextInputRef = () => {
    useEffect(()=>{
        fullName.current.focus()
    },[])
    const firstName = useRef(null);
    const fullName = useRef(null)
    const submitRef = useRef(null)
    const firstKeyDown = (e)=>{
        if(e.nativeEvent.key === "Enter"){
            //  fullName.current.focus();
            console.log("enter")
        }
    }
    const fullNameKeyDown = (e) =>{
        if(e.nativeEvent.key === "Enter"){
            submitRef.current.focus();
        }
    }
    const submit = ()=>{
        alert('hello world')
    }
    return (
       <View style={{marginTop:20,marginHorizontal:10}}>
           <MyTextInput 
                ref={firstName} 
                placeholder ="firstName" 
                style={{borderWidth:1,height:40}} 
                onKeyPress={(e)=> { console.log("onKeyPress")} }
            />
           <MyTextInput 
                ref={fullName} 
                placeholder ="fullName" 
                style={{marginTop:20,borderWidth:1,height:40}} 
                onKeyPress={fullNameKeyDown}
            />
            <TouchableOpacity ref={submitRef} onKeyPress={submit} style={{height:30,backgroundColor:'green',marginTop:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white'}}> Submit</Text>
            </TouchableOpacity>

       </View>
    )
}
export default TextInputRef;

