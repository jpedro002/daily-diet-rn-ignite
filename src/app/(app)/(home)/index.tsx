import { Button } from '@/components/Button'
import AppLogo from '@assets/Logo.png'
import { Link } from 'expo-router'
import { MoveUpRight, Plus } from 'lucide-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const HomeScreen = () => {
	return (
		<View className="flex-1 ">
			<View className="flex items-center justify-between flex-row">
				<Image source={AppLogo} />
				<Image
					source={{
						uri: 'https://avatars.githubusercontent.com/u/122836400?v=4',
						height: 40,
						width: 40,
					}}
					className="rounded-full border-2 border-gray-2 "
				/>
			</View>
			<Link asChild href="/status">
				<TouchableOpacity
					activeOpacity={100}
					className="flex flex-col w-full items-center justify-center gap-0.5
			 px-4 py-5 relative bg-green-light rounded-xl mt-9"
				>
					<View>
						<Text className="font-nunito-bold text-gray-1 text-[32px]">
							90,86%
						</Text>
					</View>
					<Text className="font-nunito-regular text-gray-2 text-base">
						das refeições dentro da dieta
					</Text>
					<View className="absolute top-2 right-2">
						<MoveUpRight color="#639339" size={24} />
					</View>
				</TouchableOpacity>
			</Link>
			<View className="mt-10 gap-2">
				<Text className=" text-lg font-nunito-regular text-gray-1">
					Refeições
				</Text>
				<Button
					className="flex flex-row"
					onPress={() => {
						console.log('Adicionar refeição')
					}}
				>
					<Plus size={18} color={'white'} />
					<Text className="text-white text-base font-nunito-regular">
						Adicionar
					</Text>
				</Button>
			</View>

			<View className="gap-8 mt-8">
				<View className="gap-2">
					<Text className="text-xl font-nunito-bold text-gray-1">12.08.22</Text>

					<View className="gap-2">
						<View className="flex flex-row items-center gap-3 pl-3 pr-4 py-3.5 rounded-md overflow-hidden border border-solid border-basegray-500">
							<View className="w-11">
								<Text className="font-nunito-bold text-gray-1 text-base ">
									20:00
								</Text>
							</View>
							<View className="h-full border border-gray-4" />
							<View className=" flex-1 text-ellipsis h-[21px] mt-[-1.00px]">
								<Text className="font-nunito-regular  text-gray-2 text-lg ">
									X-tudo
								</Text>
							</View>
							<View className=" w-3.5 h-3.5 bg-red-mid rounded-full" />
						</View>
						<View className="flex flex-row items-center gap-3 pl-3 pr-4 py-3.5 rounded-md overflow-hidden border border-solid border-basegray-500">
							<View className="w-11">
								<Text className="font-nunito-bold text-gray-1 text-base ">
									20:00
								</Text>
							</View>
							<View className="h-full border border-gray-4" />
							<View className=" flex-1 text-ellipsis h-[21px] mt-[-1.00px]">
								<Text className="font-nunito-regular  text-gray-2 text-lg ">
									X-tudo
								</Text>
							</View>
							<View className=" w-3.5 h-3.5 bg-red-mid rounded-full" />
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}

export default HomeScreen
