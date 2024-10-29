import React, { FC } from 'react'
import { LuLoader } from 'react-icons/lu'

const Loader: FC = () => {
	const loaderStyle = {
		fontSize: '32px',
		color: '#4A90E2',
		animation: 'spin 1s linear infinite'
	}

	return <LuLoader style={loaderStyle} />
}

const style = document.createElement('style')
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`
document.head.append(style)

export default Loader
