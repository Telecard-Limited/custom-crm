"use client";

import {
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  Button,
  Checkbox,
} from "@mui/material";
import Image from "next/image";
const Boards = [
  {
    teamname: "Angular JamPack",
    description: "Oluwole Team",
  },
  {
    teamname: "Angular JamPack",
    description: "Oluwole Team",
  },
  {
    teamname: "Angular JamPack",
    description: "Oluwole Team",
  },
  {
    teamname: "Angular JamPack",
    description: "Oluwole Team",
  },
  {
    teamname: "Angular JamPack",
    description: "Oluwole Team",
  },
  {
    teamname: "Angular JamPack",
    description: "Oluwole Team",
  },
  {
    teamname: "Angular JamPack",
    description: "Oluwole Team",
  },
];
//@ts-ignore

const tickets = [
  {
    icon: <Checkbox />,
    title: "Customer Review Meeting",
    status: "business",
    Date: "July ,2023",
  },
  {
    icon: <Checkbox />,
    title: "Customer Review Meeting",
    status: "business",
    Date: "July ,2023",
  },
  {
    icon: <Checkbox />,
    title: "Customer Review Meeting",
    status: "business",
    Date: "July ,2023",
  },
];

const DasboardCards = () => {
  return (
    <>
      <Container sx={{ overflowY: "scroll" }} maxWidth="xl">
        <Grid container spacing={2} gap={4}>
          {/* Card 1 */}

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              position: "absolute",
              ml: 24,
              mt: 4,
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Paper
              elevation={3}
              style={{
                padding: 10,
                width: "100%",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#172554",
                    fontSize: "17px",
                    mt: 1.5,
                    pl: 1.5,
                  }}
                >
                  Welcome back, Abiodun❕
                </Typography>
                <Image
                  width={100}
                  height={100}
                  alt="defailt dummy Images"
                  src="/images/avatar.png"
                  style={{
                    width: "64px",
                    height: "64px",
                  }}
                />
              </Grid>

              <Grid item sx={{}}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#172554",
                    fontSize: "13px",
                    mt: 1.5,
                    pl: 1.5,
                  }}
                >
                  Efficiently Monitor Your Daily Task and Ticket Progress
                </Typography>
              </Grid>

              {/* Add content for Card 1 */}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              position: "absolute",

              ml: 100,
              mt: 4,
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Paper
              elevation={3}
              style={{
                padding: 10,
                width: "100%",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#172554",
                    fontSize: "17px",
                    mt: 1.5,
                    pl: 1.5,
                  }}
                >
                  Total Board
                </Typography>
                <Image
                  width={100}
                  height={100}
                  alt="defailt dummy Images"
                  src="/images/Clipboard.png"
                  style={{
                    display: "flex",
                    width: "48px",
                    height: "48px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{}}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#172554",
                    fontSize: "17px",
                    mt: 2.5,
                    pl: 1.5,
                  }}
                >
                  466
                </Typography>
              </Grid>

              {/* Add content for Card 1 */}
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ overflowY: "scroll" }}>
        <Grid container spacing={2} gap={4}>
          {/* Card 1 */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              position: "absolute",
              ml: 24,
              mt: 30,
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Paper
              elevation={3}
              style={{
                padding: 10,
                width: "100%",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#172554",
                    fontSize: "17px",
                    mt: 1.5,
                    pl: 1.5,
                  }}
                >
                  Completed Ticket
                </Typography>
                <Image
                  width={100}
                  height={100}
                  alt="defailt dummy Images"
                  src="/images/CompletedTicketsIcons.png"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{}}>
                <Typography
                  gap={2.5}
                  sx={{
                    fontWeight: "bold",
                    color: "#172554",
                    fontSize: "17px",
                    mt: 2.5,
                    pl: 1.5,
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  134
                  <Image
                    width={100}
                    height={100}
                    alt="defailt dummy Images"
                    src="/images/red-arrow.png"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginTop: 2.5,
                      paddingLeft: 1.5,
                    }}
                  />
                  <Typography
                    sx={{ color: "#EC0000", fontSize: "9px", ml: -2, mt: 0.3 }}
                  >
                    +9.8%
                  </Typography>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              position: "absolute",
              ml: 100,
              mt: 30,
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Paper
              elevation={3}
              style={{
                padding: 10,
                width: "100%",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#172554",
                    fontSize: "17px",
                    mt: 1.5,
                    pl: 1.5,
                  }}
                >
                  Teams
                </Typography>
                <Image
                  width={100}
                  height={100}
                  alt="defailt dummy Images"
                  src="/images/TeamsIcon.png"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{}}>
                <Typography
                  gap={2.5}
                  sx={{
                    fontWeight: "bold",
                    color: "#172554",
                    fontSize: "17px",
                    mt: 2.5,
                    pl: 1.5,
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  22
                  <Image
                    width={100}
                    height={100}
                    alt="defailt dummy Images"
                    src="/images/green-arrow.png"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginTop: 2.5,
                      paddingLeft: 1.5,
                    }}
                  />
                  <Typography
                    sx={{ color: "#01BE4D", fontSize: "9px", ml: -2, mt: 0.3 }}
                  >
                    +9.8%
                  </Typography>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DasboardCards;
