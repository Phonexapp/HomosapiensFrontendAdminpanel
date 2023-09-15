import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Video from "../DummyVideo/ElonMusk.mp4";
import { Box } from '@mui/material';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function UserVideo() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <>
             <Box style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 2,marginTop:5 }}>
            <Card sx={{ maxWidth: 300, maxHeight: 320, margin: 2 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <video src={Video} width={300} height={300} style={{ marginTop: '-12%' }} controls />
            </Card>

            <Card sx={{ maxWidth: 300, maxHeight: 320, margin: 2 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <video src={Video} width={300} height={300} style={{ marginTop: '-12%' }} controls />
            </Card>

            <Card sx={{ maxWidth: 300, maxHeight: 320, margin: 2 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <video src={Video} width={300} height={300} style={{ marginTop: '-12%' }} controls />
            </Card>

            <Card sx={{ maxWidth: 300, maxHeight: 320, margin: 2 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <video src={Video} width={300} height={300} style={{ marginTop: '-12%' }} controls />
            </Card>

            <Card sx={{ maxWidth: 300, maxHeight: 320 , margin: 2}}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <video src={Video} width={300} height={300} style={{ marginTop: '-12%' }} controls />
            </Card>

            <Card sx={{ maxWidth: 300, maxHeight: 320, margin: 2 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <video src={Video} width={300} height={300} style={{ marginTop: '-12%' }} controls />
            </Card>
        </Box>
        </>
    );
}

export default UserVideo;














