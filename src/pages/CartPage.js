import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const CartPage = () => (
    <Box p={4}>
        <Typography variant="h4" gutterBottom>Your Cart</Typography>
        <Card>
            <CardContent>
                <Typography variant="body1">Your cart is currently empty.</Typography>
            </CardContent>
        </Card>
    </Box>
);

export default CartPage;
