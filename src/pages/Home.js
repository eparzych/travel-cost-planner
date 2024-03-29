import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Grid, Button } from '@mui/material';
import { API } from "../config";
import TourCard from "../components/TourCard";

export default function Home(){

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch(`${API}/trips`)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {
            if(data) {
                setTrips(data);
            }
            })
        .catch(error => {
            console.log(error);
            });
    }, []);

 return (
    <Grid container columnSpacing={2} padding={5}>
        <Grid item xs={12} display="flex" justifyContent="center" >
            <h1>Welcome to Travel Calculator</h1>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center" marginBottom={5}>
            <Button xs={{pb: 1}} component={Link} to="/add" variant="contained" color="primary" size="large">
                Create Travel
            </Button>
        </Grid>
        <Grid item xs={12} display="flex" alignItems="flex-start" flexWrap="wrap" >

                {trips.map(trip =>
                    <Grid item key={trip.id} xs={12} sm={3} paddingX={1} >
                        <TourCard
                            trip={trip} />
                    </Grid>
                )}

        </Grid>
     </Grid>
 )
}
