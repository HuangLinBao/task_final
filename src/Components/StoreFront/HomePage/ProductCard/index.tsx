import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Prpos = PropsWithChildren & {
	'data-testid'?: string;
};

const ProductCard: React.FC<Prpos> = ({ ...props }) => {
	return (
		<React.Fragment {...props}>
			<Card elevation={3} sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='140'
						image='https://newfastuff.com/wp-content/uploads/2019/05/2eNs8cg.png'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							Lizard
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							$999
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</React.Fragment>
	);
};

export default ProductCard;
