import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Image from "../Image/photo-1633332755192-727a05c4013d.jpg";
import Image1 from "../Image/DUMMYIMAGE.jpg";
import Image2 from "../Image/DUMMYIMAGE2.jpg";
import Image3 from "../Image/OLDIMAGE.jpg";
import Image5 from  "../Image/OLDIMAGE2.jpg";
import Image6 from "../Image/YOUNGBOY.jpg";
import Image7 from "../Image/YOUNGBOY1.jpg";
import Image8 from "../Image/download.jpg";
import Image9 from "../Image/WOMEN.jpg";
import Image10 from "../Image/WOMEN1.jpg";
import Image11 from "../Image/MEN1.jpg";
import Image12 from "../Image/MEN2.jpg";
import Image13 from "../Image/MEN.jpg";

const PersonalAccountData = () => {
    const Navigate = useNavigate();

    const METHOD = () => {
        Navigate("/Userprofile");
    }

    return (
        <Stack direction="row" spacing={10} marginLeft={3} style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {/* First Box */}
            <Box onClick={METHOD} style={{ marginBottom: '20px',marginLeft:"7%" }}>
                <Avatar alt="Remy Sharp" src={Image} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>James Sharp</Typography>
            </Box>

            {/* Add more Box components for each avatar */}
            {/* Second Box */}
            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image1} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>Mary Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image2} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>Patricia Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image3} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>Michael Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image5} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>David Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image6} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>William Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image7} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>Richard Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image8} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>Susan Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image9} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>Jessica Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image10} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>Sarah Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image11} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>Daniel Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image12} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>Mark Jain</Typography>
            </Box>

            <Box style={{ marginBottom: '20px' }}>
                <Avatar alt="John Jain" src={Image13} style={{ width: '100px', height: '100px' }} /><br />
                <Typography marginLeft={0} fontWeight="bold" fontSize={20}>Steven Jain</Typography>
            </Box>
        </Stack>
    );
}

export default PersonalAccountData;

