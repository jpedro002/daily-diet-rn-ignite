import React from 'react'
import { Text, View, type ViewProps } from 'react-native'

interface InfoCardProps extends ViewProps {
	title: string
	description: string
}

export const InfoCard = ({
	title,
	description,
	style,
	className,
	...props
}: InfoCardProps) => {
	return (
		<View
			className={`p-4 gap-2 items-center justify-center bg-gray-6 rounded-lg ${className}`}
			style={style}
			{...props}
		>
			<Text className="text-gray-1 text-center font-nunito-bold text-2xl">
				{title}
			</Text>
			<Text className="text-gray-1 text-center font-nunito-regular text-base">
				{description}
			</Text>
		</View>
	)
}
