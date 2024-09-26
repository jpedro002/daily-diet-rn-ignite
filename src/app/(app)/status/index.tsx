import constants from 'expo-constants'
import { Link } from 'expo-router'
import { MoveLeft } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { InfoCard } from './_components/InfoCard'
const { statusBarHeight } = constants

const StatusDiet = () => {
	return (
		<>
			<View
				className="h-[220px] bg-green-light px-6"
				style={{
					paddingTop: 24 + statusBarHeight,
				}}
			>
				<Link href="/" asChild>
					<TouchableOpacity activeOpacity={90} className="p-2">
						<MoveLeft size={24} color={'#639339'} />
					</TouchableOpacity>
				</Link>
				<View className="items-center justify-center gap-2">
					<View>
						<Text className="font-nunito-bold text-gray-1 text-[32px]">
							90,86%
						</Text>
					</View>
					<Text className="font-nunito-regular text-gray-2 text-base">
						das refeições dentro da dieta
					</Text>
				</View>
			</View>
			<View className="  p-6  rounded-t-[30px] -mt-[30px] bg-white py-[33px] px-6   ">
				<Text className="text-gray-1 text-center font-nunito-bold text-lg mb-[23px]">
					Estatísticas gerais
				</Text>
				<View className="gap-3">
					<InfoCard
						title="109"
						description="melhor sequência de pratos dentro da dieta
						"
					/>
					<InfoCard
						title="109"
						description="melhor sequência de pratos dentro da dieta
						"
					/>
					<View className="gap-3 flex-row">
						<InfoCard
							title="109"
							description="abc def "
							className="bg-green-light flex-1   "
						/>
						<InfoCard
							title="109"
							description="abc def "
							className="bg-red-light flex-1 "
						/>
					</View>
				</View>
			</View>
		</>
	)
}

export default StatusDiet
