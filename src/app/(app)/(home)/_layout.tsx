import constants from 'expo-constants'
import { Slot } from 'expo-router'
import { View } from 'react-native'
const { statusBarHeight } = constants

const HomeLayout = () => {
	return (
		<View
			className="flex-1 bg-white p-6 "
			style={{
				paddingTop: 24 + statusBarHeight,
			}}
		>
			<Slot />
		</View>
	)
}
export default HomeLayout
