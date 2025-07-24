import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';


import './InfoBox.css';

export default function InfoBox({ info }) {
    const URL_IMAGE = "https://tse1.mm.bing.net/th/id/OIP.QXYu8JqMdwfnNnAlDTuoGQHaFN?pid=Api&P=0&h=180";
    const Hot_url = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";
    const cold_url = "https://images.unsplash.com/photo-1612719983096-39505900b5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZmFsbGluZyUyMHNub3d8fDB8fHx8MTYyODg0Mzg4NA&ixlib=rb-1.2.1&q=80&w=1080";
    const Rain_url = "https://media.istockphoto.com/photos/storm-sky-rain-picture-id512218646?b=1&k=20&m=512218646&s=170667a&w=0&h=qG0BINhoIxGi5LY4gQIbvpS9zlE96yBB8RgEZVCJOwo=";


    return (
        <div className="weather-container">
            <div className="weather-inner">


                <Card className="weather-card">
                    <CardMedia
                        sx={{ height: 180 }}
                        image={!info.Name ? URL_IMAGE : info.Humidity > 80 ? Rain_url : info.temp > 15 ? Hot_url : cold_url}
                        title="green iguana"
                        className="weather-image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            city:{info.Name}
                            {" "? (
                                info.Humidity > 80 ? (
                                    <ThunderstormIcon />
                                ) : info.temp > 15 ? (
                                    <SunnyIcon />
                                ) : (
                                    <SevereColdIcon />
                                )
                            ) : (
                                <CloudQueueIcon />
                            )}
                        </Typography>

                        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
                            <div>Temperature={info.temp}&deg;C</div>
                            <div>Humidity={info.Humidity}</div>
                            <div>Min Temp={info.tempMin}&deg;C</div>
                            <div>Max Temp={info.tempMax}&deg;C</div>
                            <div>FeelsLike={info.Feelslike}</div>
                            <div>Description={info.Description}</div>


                            <div></div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}




