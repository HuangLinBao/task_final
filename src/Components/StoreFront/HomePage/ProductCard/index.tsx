import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Product = {
	id: string;
	name: string;
	img: string;
	price: string;
};
type Prpos = PropsWithChildren & {
	'data-testid'?: string;
	onClick?: () => void;
	product?: Product;
};

const ProductCard: React.FC<Prpos> = (props) => {
	return (
		<div {...props}>
			<Card data-testid='card' elevation={3} sx={{ m: 5, minWidth: 345 }}>
				<CardActionArea>
					<CardMedia component='img' height='140' image={props.product?.img} />
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{props.product?.name}
						</Typography>
						<Typography data-testid='price' variant='body2' color='text.secondary'>
							{props.product?.price}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default ProductCard;
