import React from 'react';
import { Box, Typography, Button, CardMedia } from '@mui/material';

const ProductPage = () => (
    <Box p={4}>
        <Typography variant="h4" gutterBottom>Product Details</Typography>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
            <CardMedia
                component="img"
                image="https://via.placeholder.com/300?text=Product+Image"
                alt="Product"
                sx={{ width: { md: '50%' }, marginBottom: { xs: 2, md: 0 } }}
            />
            <Box ml={4}>
                <Typography variant="h5">Product Name</Typography>
                <Typography variant="h6" color="textSecondary">$99.99</Typography>
                <Typography variant="body1" paragraph>
                    This is a detailed description of the product. It highlights its features and benefits.
                </Typography>
                <Button variant="contained" color="primary">Add to Cart</Button>
            </Box>
        </Box>
    </Box>
);

export default ProductPage;
