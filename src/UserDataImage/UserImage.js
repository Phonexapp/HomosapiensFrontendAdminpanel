import React from "react";
import Image from "../Image/photo-1633332755192-727a05c4013d.jpg";
import { Box } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${Image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${Image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function UserImage() {
    return (
        <ImageList
            sx={{
                width: 583,
                height: 450,
                marginLeft: 13,
                marginTop: 3,
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                transform: 'translateZ(0)',
            }}
            rowHeight={200}
            gap={1}
        >
            {itemData.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                    <ImageListItem key={item.img} cols={cols} rows={rows}>
                        <img
                            {...srcset(item.img, 250, 200, rows, cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }}
                            title={item.title}
                            position="top"
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'white' }}
                                    aria-label={`star ${item.title}`}
                                >
                                    <MoreHorizIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                        />
                    </ImageListItem>
                );
            })}
        </ImageList>
    );
}

const itemData = [
    {
        img: { Image },
        title: 'Breakfast',
        author: '@bkristastucchio',
        //   featured: true,
    },
    {
        img: { Image },
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: { Image },
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: { Image },
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: { Image },
        title: 'Hats',
        author: '@hjrc33',
    }
];

export default UserImage;