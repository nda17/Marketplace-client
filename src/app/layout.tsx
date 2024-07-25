import MainProvider from '@/providers/MainProvider/MainProvider'
import { IRootLayout } from '@/shared/types/root-layout.types'
import { Outfit } from 'next/font/google'
import { FC } from 'react'
import './globals.css'

const font = Outfit({
	subsets: ['latin'],
	weight: '400',
	display: 'fallback',
	style: 'normal'
})

const RootLayout: FC<IRootLayout> = ({ children }) => {
	return (
		<html lang="en">
			<body className={font.className}>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	)
}

export default RootLayout
