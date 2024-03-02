import { Divider, Tag, Typography } from 'antd'
import React from 'react'
import { CoinInfo } from './CoinInfo'

export const CoinInfoModal = ({ coin }) => {
	return (
		<>
			<CoinInfo coin={coin} withSymbol />
			<Divider />
			<Typography.Paragraph
				style={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<Typography.Text strong>1 hour: </Typography.Text>
				<Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
					{coin.priceChange1h}%
				</Tag>
				<Typography.Text strong>1 day: </Typography.Text>
				<Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
					{coin.priceChange1d}%
				</Tag>
				<Typography.Text strong>1 week: </Typography.Text>
				<Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
					{coin.priceChange1w}%
				</Tag>
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text>Price: </Typography.Text>
				{coin.price.toFixed(2)} $
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text>Price BTC: </Typography.Text>
				{coin.priceBtc} ß
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text>Market Capitalization: </Typography.Text>
				{coin.marketCap.toFixed(2)} $
			</Typography.Paragraph>
			{coin.contractAddress && (
				<Typography.Paragraph>
					<Typography.Text>Contract Address: </Typography.Text>
					{coin.contractAddress}
				</Typography.Paragraph>
			)}
		</>
	)
}
