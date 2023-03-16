import React from "react";
import { Box, Grid, Paper, Slide, Typography, useTheme } from "@mui/material";
import "./home.css";

export default function Thovson() {
  interface ISlidePanel {
    bgColor: string;
    title: string;
    children: React.ReactElement;
  }
  const SlidePanel = ({ bgColor, title, children }: ISlidePanel) => {
    const [show, setShow] = React.useState(true);
    const containerRef = React.useRef(null);

    return (
      // <Box  onMouseOver={() => setShow(false)} onMouseOut={() => setShow(true)} sx={{
      //     height: "100%",
      //     textAlign: "center",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     position: "relative"
      // }}>
      //     <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
      //         <Paper elevation={0}>
      //             Details
      //         </Paper>
      //     </Box>
      //     <Box>
      //         <Slide direction="down" in={show} mountOnEnter unmountOnExit>
      //             <Box zIndex={4} width="100%" height="100%" sx={{backgroundColor: bgColor}}>
      //                 <Paper elevation={4} sx={{height: "100%", backgroundColor: bgColor, borderRadius: 0, zIndex: 4}}>
      //                     {children}
      //                 </Paper>
      //             </Box>
      //         </Slide>
      //     </Box>
      // </Box>
      <Box
        position="relative"
        ref={containerRef}
        onMouseOver={() => setShow(false)}
        onMouseOut={() => setShow(true)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
          }}
        >
          {/* Hidden component content */}
          {children}
        </Box>
        <Box position="absolute" top={0} zIndex={1} height="95vh" width="100%">
          {/* Bottom component content */}
          <Slide direction="down" in={show} mountOnEnter unmountOnExit>
            <Paper
              elevation={4}
              sx={{ height: "100%", borderRadius: 0, backgroundColor: bgColor }}
            >
              {/* Cover component content */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "95vh",
                }}
              >
                <Typography variant="h3" color="neutral">{title}</Typography>
              </Box>
            </Paper>
          </Slide>
        </Box>
      </Box>
    );
  };

  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "95vh",
      }}
    >
      <Grid
        item
        xs={4}
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <SlidePanel bgColor="neutral.light" title="SKILLS">
          <Box>asdf</Box>
        </SlidePanel>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <SlidePanel bgColor="neutral.main" title="EXPERIENCE">
          <div>Detail</div>
        </SlidePanel>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          backgroundColor: "primary.light",
        }}
      >
        <SlidePanel bgColor="neutral.dark" title="PROJECTS">
          <div>Detail</div>
        </SlidePanel>
      </Grid>
    </Grid>
  );
}
