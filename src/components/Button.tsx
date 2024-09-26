import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
	className?: string
	variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className,
	activeOpacity = 100,
	variant = 'primary',
	...props
}) => {
	const shablauzinho = (variant: string) => {
		let cn =
			' inline-flex items-center justify-center gap-3 px-6 py-4 relative rounded-md '

		if (variant === 'primary') {
			cn += ' bg-gray-2 active:bg-gray-1 text-white '
		} else {
			cn = ' border border-solid border-gray-1 active:bg-gray-5 text-black '
		}

		return cn + className
	}

	return (
		<TouchableOpacity
			activeOpacity={activeOpacity}
			className={shablauzinho(variant)}
			{...props}
		>
			{children}
		</TouchableOpacity>
	)
}
