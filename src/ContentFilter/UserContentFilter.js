import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import Video from "../DummyVideo/ElonMusk.mp4";
import { Box, Checkbox } from "@material-ui/core";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'video', headerName: 'Video', renderCell: (params) => <video src={Video} style={{ width: 500, height: 500 }} controls /> },
];

function UserContentFilter() {
    const [SEARCH, setSEARCH] = useState("");
    const [selectAll, setSelectAll] = useState(false);

    const rows = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
    ];

    const handleSelectAll = (event) => {
        setSelectAll(event.target.checked);
    };

    return (
        <>
            <div className="input-group input-group-sm mb-1 rounded-pill" style={{ maxWidth: '500px', marginLeft: "23%", marginTop: "-5%", backgroundColor: "#313866" }}>
                <input type="text" className="form-control rounded-start" placeholder="Search Videos" aria-label="Search" aria-describedby="search-button" style={{ backgroundColor: "#252B48", color: "white" }} onChange={(e) => setSEARCH(e.target.value)} />
            </div><br /><br />
            {/* <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns.map((col) => ({
                        ...col,
                        renderHeader: () => (
                            <Checkbox
                                color="primary"
                                checked={selectAll}
                                onChange={handleSelectAll}
                                inputProps={{ 'aria-label': 'select all videos' }}
                            />
                        ),
                    }))}
                    checkboxSelection
                    components={{
                        Toolbar: () => (
                            <Box style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                                <div style={{ flexGrow: 1 }}>
                                    <div>
                                        {selectAll && <span>All selected</span>}
                                        {!selectAll && <span>Select videos</span>}
                                    </div>
                                </div>
                            </Box>
                        ),
                    }}
                />
            </div> */}
        </>
    );
}

export default UserContentFilter;
