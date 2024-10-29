import Loader from '@/components/ui/Loader'

export default function Loading() {
	const loaderStyle = {
		height: '100vh',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '24px'
	}

	return (
		<div style={loaderStyle}>
			<Loader />
		</div>
	)
}
