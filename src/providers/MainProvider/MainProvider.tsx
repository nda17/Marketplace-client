import { FC } from 'react'
import { IMainProvider } from './mainProvider.interface'

const MainProvider: FC<IMainProvider> = ({ children }) => {
	return <>{children}</>
}

export default MainProvider
