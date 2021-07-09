// import React, { useReducer, useEffect } from 'react'
// import { View, Text } from 'react-native'
// const initalState = {
//     post: {},
//     loading: true,
//     error: ''
// }
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "FETCH-SUCCESS":
//             return {
//                 post: action.payload,
//                 error: '',
//                 loading: false
//             }
//         case "FETCH-ERROR":
//             return {
//                 post: {},
//                 error: 'ERROR',
//                 loading: false
//             }
//         default:
//             return state
//     }
// }
// const FetDataUserReducer = () => {

//     const [state, dispatch] = useReducer(reducer, initalState)
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => dispatch({ type: 'FETCH-SUCCESS', payload: response.data }))
//             .catch(error => {
//                 dispatch({ type: 'FETCH-ERROR' })
//             })
//     })
//     return (
//         <View>
//             <Text>Hello World</Text>
//             <Text>
//                 {
//                     state.loading ? "loading" : state.post.title
//                 }
//             </Text>

//         </View>
//     )
// }
// // export default FetDataUserReducer;

import React, { useReducer, useEffect } from 'react'
import {View,Text} from 'react-native'
const initialState = {
	loading: true,
	error: '',
	post: {}
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: ''
			}
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong!'
			}
		default:
			return state;
	}
}

function FetDataUserReducer() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response)=>response.json())
			.then(responseJson => {
				dispatch({ type: 'FETCH_SUCCESS', payload: responseJson.title })
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ERROR' })
			})
	}, [])
	return (
		<View>
            <Text style={{color:'green',fontSize:20}}>
            			{state.loading ? 'Loading' : state.post}

            </Text>
            <Text>hello</Text>
		</View>
	)
}

export default FetDataUserReducer