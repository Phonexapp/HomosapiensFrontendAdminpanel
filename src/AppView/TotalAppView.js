import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
import StatBox from "../components/StatBox";
import VideocamIcon from '@mui/icons-material/Videocam';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ImageIcon from '@mui/icons-material/Image';
import { ResponsivePie } from "@nivo/pie";
import { mockPieData as data } from "../data/mockData";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TotalImageVisit from "../ToalVisitGraph/TotalImageVisit";
import TotalVideoVisit from "../ToalVisitGraph/TotalVideoVisit";
import TotalReelsVisit from "../ToalVisitGraph/TotalReelsVisit";
import TotalReviewVist from "../ToalVisitGraph/TotalReviewVisit";
import TotalStoryVisit from "../ToalVisitGraph/TotalStoryVisit";
import { useState } from "react";

const TotalAppView = () => {
  const [TotalImageGraph, setTotalImageGraph] = useState(false);
  const [ContentVisit, setContentVisit] = useState(true);
  const [TotalVideoGraph, setTotalVideoGraph] = useState(false);
  const [TotalReelGraph, setTotalReelGraph] = useState(false);
  const [TotalReviewGraph, setTotalReviewGrpah] = useState(false);
  const [TotalStoryGrpah, setTotalStoryGraph] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const TotalImageVisitFunction = () => {
    setTotalImageGraph(true);
    setContentVisit(false);
    setTotalVideoGraph(false);
    setTotalReelGraph(false);
    setTotalStoryGraph(false);
  }

  const TotalVideoVisitFunction = () => {
    setTotalVideoGraph(true);
    setTotalImageGraph(false);
    setContentVisit(false);

  }

  const TotalReelVisitFunction = () => {
    setTotalReelGraph(true);
    setTotalVideoGraph(false);
    setContentVisit(false);

  }

  const TotalReviewVistFunction = () => {
    setTotalReviewGrpah(true);
    setTotalReelGraph(false);
    setContentVisit(false);
  }

  const TotalStoryVisitFunction = () => {
    setTotalStoryGraph(true);
    setTotalReviewGrpah(false);
    setContentVisit(false);
  }

  return <>
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Page Visits" subtitle="Welcome to your dashboard" />
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
          borderRadius={3}
          onClick={TotalImageVisitFunction}

        >
          <StatBox
            title="431,225"
            subtitle="Images"
            progress="0.50"
            increase="+21%"
            icon={
              <ImageIcon
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
          borderRadius={3}
          onClick={TotalVideoVisitFunction}
        >
          <StatBox
            title="12,361"
            subtitle="Vidoes"
            progress="0.75"
            increase="+14%"
            icon={
              <VideocamIcon
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
          borderRadius={3}
          onClick={TotalReelVisitFunction}
        >
          <StatBox
            title="431,225"
            subtitle="Shoot and Share"
            progress="0.50"
            increase="+21%"
            icon={
              <SlowMotionVideoIcon
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
          borderRadius={3}
          onClick={TotalReviewVistFunction}
        >
          <StatBox
            title="431,225"
            subtitle="Reviews"
            progress="0.50"
            increase="+21%"
            icon={
              <ReviewsIcon
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
          borderRadius={3}
          onClick={TotalStoryVisitFunction}
        >
          <StatBox
            title="431,225"
            subtitle="Story"
            progress="0.50"
            increase="+21%"
            icon={
              <LibraryBooksIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box><br /><br />

    {
      ContentVisit ? (
        <>
          {/* HEADER */}
          <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft={5}>
            <Header title="Content Views" />
          </Box>

          {/* Total Content Views */}
          <ResponsivePie
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: colors.grey[100],
                  },
                },
                legend: {
                  text: {
                    fill: colors.grey[100],
                  },
                },
                ticks: {
                  line: {
                    stroke: colors.grey[100],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: colors.grey[100],
                  },
                },
              },
              legends: {
                text: {
                  fill: colors.grey[100],
                },
              },
            }}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={colors.grey[100]}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            enableArcLabels={false}
            arcLabelsRadiusOffset={0.4}
            arcLabelsSkipAngle={7}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </>
      ) : null
    }


    {/* TotalImageVisitGrpah */}
    {
      TotalImageGraph ? (
        <>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft={5}>
            <Header title="Image Visit" />
          </Box>
          <TotalImageVisit />
        </>
      ) : null
    }

    {
      TotalReelGraph ? (
        <>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft={5}>
            <Header title="Shoot and Share Visit" />
          </Box>
          <TotalReelsVisit />
        </>
      ) : null
    }

    {
      TotalVideoGraph ? (
        <>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft={5}>
            <Header title="Video Visit" />
          </Box>
          <TotalVideoVisit />
        </>
      ) : null
    }

    {
      TotalReviewGraph ? (
        <>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft={5}>
            <Header title="Review Visit" />
          </Box>
          <TotalReviewVist/>
        </>
      ) : null
    }

{
      TotalStoryGrpah ? (
        <>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft={5}>
            <Header title="Story Visit" />
          </Box>
          <TotalStoryVisit/>
        </>
      ) : null
    }
  </>
};

export default TotalAppView;

