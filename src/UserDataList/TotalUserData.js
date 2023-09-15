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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { colors } from '@mui/material';
import ActiveDeactive from '../UserActiveDeactive/ActiveDeactive';
import Image from "../Image/photo-1633332755192-727a05c4013d.jpg";

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

const TotalUserData = () => {
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return <>

        <Card sx={{ maxWidth: 345, marginLeft: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <MoreHorizIcon onClick={handleOpen}/>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={Image}
                alt="Paella dish"
            />
            {/* {DisplayName} */}
            <CardContent>
                <Typography variant="body2" color="text.secondary" fontSize={17}>
                    Hacker Sukla
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Details:</Typography>
                    <Typography fontSize={17}>
                        FullName:Rohit<br />
                        LastName:Jain<br />
                        DisplayName:Hacker<br />
                        Email:Rohit@Gmail.com<br />
                        <Typography fontSize={17} color={"green"}>Status:Active</Typography>
                        Activity:Video,Reels,Image<br />
                        Uploads:355
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
        {
            open ? (
                <ActiveDeactive open={open} close={handleClose} />
            ) : null
        }
    </>
}

export default TotalUserData;