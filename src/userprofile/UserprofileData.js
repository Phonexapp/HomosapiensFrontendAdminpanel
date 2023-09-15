import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from "../Image/photo-1633332755192-727a05c4013d.jpg";
import { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import UserImage from '../UserDataImage/UserImage';
import UserVideo from '../UserVideoList/UserVideo';


const UserprofileData = () => {
    const [value, setValue] = React.useState(0);
    const [ImageStatus, setImageStatus] = useState(false);
    const [CardStatus, setCardStatus] = useState(true);
    const [VideoStatus, setVideoStatus] = useState(false);


    const Navigate = useNavigate();

    const containerStyle = {
        position: 'relative',
        width: '1200px', // Adjust as needed
        height: '500px', // Adjust as needed
        marginLeft: '5%'
    };

    const imageStyle = {
        width: '50%',
        height: '70%',
        opacity: 0.7,
        borderRadius: "10px",
        marginLeft: "2.9%"
    };

    const buttonStyle = {
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white background
        color: 'white', // White text
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer',
        marginTop: "6%",
        marginLeft: "5%",
        borderRadius: "20px",
        marginRight: '20px',
    };

    const ButtonStyle = {
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white background
        color: 'white', // White text
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer',
        marginTop: "6%",
        marginLeft: "14%",
        borderRadius: "20px",
        marginRight: '20px',
    };

    const ButtonStylee = {
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white background
        color: 'white', // White text
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer',
        marginTop: "6%",
        marginLeft: "27%",
        borderRadius: "20px",
        marginRight: '20px',
    };

    const userNameStyle = {
        position: 'absolute',
        top: '5px',
        left: '10px',
        color: 'white',
        fontSize: '25px',
        marginLeft: "5%",
        marginTop: "20%",
        fontWeight: "bold"
    };

    const userStyle = {
        position: 'absolute',
        top: '5px',
        left: '10px',
        color: 'white',
        fontSize: '25px',
        marginLeft: "6%",
        marginTop: "23%",
        fontSize: "12px"
    };

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const UserImageFunction = () => {
        setImageStatus(true);
        // setCardStatus(false);
        setVideoStatus(false);

    }

    const UserVideoFunction = () => {
        setVideoStatus(true);
        // setCardStatus(true);
        setImageStatus(false);
    }

    return <>
        <div style={containerStyle}>
            <img
                src={Image}
                alt="Image"
                style={imageStyle}
            />
            <button style={{ ...buttonStyle }}>View Profile</button>
            <button style={{ ...ButtonStyle }}>Deactivate Account</button>
            <button style={{ ...ButtonStylee }}>Delete Account</button>
            <div style={userNameStyle}>Ravichandra Jainkumar</div>
            <div style={userStyle}>Software Developer</div>
            <Box sx={{ width: "53%" }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    style={{
                        borderRadius: "10px", backgroundColor: "rgba(48, 30, 103, 0.5)", marginLeft: "5%", opacity: 0.5 // Adjust the opacity value as needed
                    }}
                >
                    <BottomNavigationAction label="Images" icon={<ImageIcon />} style={{ color: "white" }} onClick={UserImageFunction} />
                    <BottomNavigationAction label="Running Pictures" icon={<VideocamIcon />} style={{ color: "white" }} onClick={UserVideoFunction} />
                    <BottomNavigationAction label="Shhot and Share" icon={<SlowMotionVideoIcon />} style={{ color: "white" }} />
                    <BottomNavigationAction label="Amazing Reviews" icon={<ReviewsIcon />} style={{ color: "white" }} />
                    <BottomNavigationAction label="Freedom Writers" icon={<LibraryBooksIcon />} style={{ color: "white" }} />
                </BottomNavigation>
            </Box>
            {
                CardStatus ? (
                    <Card sx={{ width: 600, marginLeft: 4.5, borderRadius: 1, backgroundColor: "rgba(48, 30, 103, 0.5)", opacity: 0.4 }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ fontSize: 14, color: "white", fontWeight: "bold" }} gutterBottom>
                                        &nbsp; FullName&nbsp;:&nbsp;&nbsp;Johnm <br />
                                        &nbsp;    LastName&nbsp;:&nbsp;&nbsp;Johnkanshst <br />
                                        &nbsp;   DisplayName&nbsp;:&nbsp;&nbsp;sdsdsdsd <br />
                                        &nbsp;   Email&nbsp;:&nbsp;&nbsp;skjdksjdskj@kajkjksas.com
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ fontSize: 14, color: "white", fontWeight: "bold" }} gutterBottom>
                                        Joining Date&nbsp;:&nbsp;&nbsp;22/07/2022 <br />
                                        Profile Type&nbsp;:&nbsp;&nbsp;Personal Account <br />
                                        Uploads&nbsp;:&nbsp;&nbsp;235 <br />
                                        Status&nbsp;:&nbsp;&nbsp;<span style={{ color: "lightgreen" }}>Active</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ) : null
            }
        </div><br/>
        {
            ImageStatus ? (
                <UserImage />
            ) : null
        }
        {
            VideoStatus ? (
                <UserVideo />
            ) : null
        }
    </>
}

export default UserprofileData;

