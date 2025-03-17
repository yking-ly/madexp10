import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>Welcome to LuxShop</Typography>
        <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={`Product ${item}`}
                            height="140"
                            image={`https://via.placeholder.com/150?text=Product+${item}`}
                        />
                        <CardContent>
                            <Typography variant="h6">Product {item}</Typography>
                            <Typography variant="body2" color="textSecondary">$99.99</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                component={Link}
                                to="/products"
                                style={{ marginTop: '10px' }}
                            >
                                View Details
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
);

export default HomePage;
