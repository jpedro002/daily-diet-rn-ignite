import { useAppSelector } from '@/store'
import { increment } from '@/store/slices/counterSlice'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

export default function HomeScreen() {
	const count = useAppSelector((state) => state.counterSlice.value)
	const dispatch = useDispatch()

	const incrementValue = () => {
		dispatch(increment())
	}
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-green-mid text-2xl font-roboto-regular">
				Hello, NativeWind v4!
			</Text>
			<Text className="text-blue-500 text-2xl bg-black font-roboto-bold">
				Hello, NativeWind v4!
			</Text>
			<TouchableOpacity
				onPress={incrementValue}
				className="bg-blue-500 p-4 rounded-lg"
			>
				<Text className="text-white">Press me</Text>
				<Text className="text-white">{count}</Text>
			</TouchableOpacity>
		</View>
	)
}
