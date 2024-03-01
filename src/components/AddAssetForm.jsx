import { Divider, Flex, Select, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { useCrypto } from '../context/crypto-context'

export const AddAssetForm = () => {
	const { crypto } = useCrypto()
	const [coin, setCoin] = useState(null)

	if (!coin) {
		return (
			<Select
				style={{ width: '100%' }}
				onSelect={v => setCoin(crypto.find(c => c.id === v))}
				placeholder='Select coin'
				options={crypto.map(coin => ({
					label: coin.name,
					value: coin.id,
					icon: coin.icon,
				}))}
				optionRender={option => (
					<Space>
						<img
							style={{ width: 20 }}
							src={option.data.icon}
							alt={option.data.label}
						/>
						{option.data.label}
					</Space>
				)}
			/>
		)
	}
	return (
		<form>
			<Typography.Title level={2} style={{ margin: 0 }}>
				<Flex align='center'>
					<img
						style={{ width: 40, marginRight: 5 }}
						src={coin.icon}
						alt={coin.name}
					/>
					<Typography.Title level={2} style={{ margin: 0 }}>
						({coin.symbol}) {coin.name}
					</Typography.Title>
				</Flex>
			</Typography.Title>
			<Divider />
		</form>
	)
}
