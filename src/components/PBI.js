import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "./Header";
import StatBox from "./StatBox";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';

const PBI = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const Navigate = useNavigate();

    const PersonalAccountFunction = () => {
        Navigate("/PersonalAccountData");
    }
    const BusinessAccountFunction = () => {
        Navigate("/BusinessAccountData");
    }
    const InstituteAccountFunction = () => {
        Navigate("/InstituteAccountData");
    }

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={PersonalAccountFunction}
                    borderRadius={3}

                >
                    <StatBox
                        title="12,361"
                        subtitle="Personal Account"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <AccountCircleIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={BusinessAccountFunction}
                    borderRadius={3}

                >
                    <StatBox
                        title="431,225"
                        subtitle="Business Account"
                        progress="0.50"
                        increase="+21%"
                        icon={
                            <BusinessCenterIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={InstituteAccountFunction}
                    borderRadius={3}

                >
                    <StatBox
                        title="32,441"
                        subtitle="Institute Account"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <SchoolIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default PBI;
