import { createContext, useContext, useEffect, useState } from 'react'
import { fakeFetchAssets, fakeFetchData } from '../api'
import { percentDifference } from '../utils/utils.js'

const CryptoContext = createContext({
	assets: [],
	crypto: [],
	loading: false,
})

function mapAssets(assets, result) {
	return assets.map(asset => {
		const coin = result.find(c => c.id === asset.id)
		return {
			grow: asset.price < coin.price,
			growPercent: percentDifference(asset.price, coin.price),
			totalAmount: asset.amount * coin.price,
			totalProfit: asset.amount * coin.price - asset.amount * asset.price,
			...asset,
		}
	})
}

export function CryptoContextProvider({ children }) {
	const [loading, setLoading] = useState(false)
	const [crypto, setCrypto] = useState([])
	const [assets, setAssets] = useState([])

	useEffect(() => {
		async function preload() {
			setLoading(true)

			const { result } = await fakeFetchData()
			const assets = await fakeFetchAssets()

			setCrypto(result)
			setAssets(mapAssets(assets, result))

			setLoading(false)
		}
		preload()
	}, [])

	const addNewAsset = newAsset => {
		setAssets(prev => mapAssets([...prev, newAsset], crypto))
	}

	return (
		<CryptoContext.Provider value={{ loading, crypto, assets, addNewAsset }}>
			{children}
		</CryptoContext.Provider>
	)
}

export default CryptoContext

export function useCrypto() {
	return useContext(CryptoContext)
}
