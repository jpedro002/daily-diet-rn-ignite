import { Slot } from 'expo-router'
import '../global.css'
import { ReduxProvider } from '@/store/ReduxProvider'
import {
	NunitoSans_400Regular,
	NunitoSans_700Bold,
	useFonts,
} from '@expo-google-fonts/nunito-sans'
import { ActivityIndicator, View } from 'react-native'

export default function LayoutMain() {
	const [fontsLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	})

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" />
			</View>
		)
	}

	return (
		<ReduxProvider>
			<Slot />
		</ReduxProvider>
	)
}
