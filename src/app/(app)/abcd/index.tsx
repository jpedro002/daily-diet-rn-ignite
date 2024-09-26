import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Abc = () => {
	return (
		<View className="flex-1 justify-center items-center bg-slate-800">
			<Text className="text-4xl font-bold text-white">Hello index</Text>
			<Link href="/status">abs</Link>
		</View>
	)
}

export default Abc
