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
function extractFirstLetters(boards) {
  const firstLetters = [];

  for (let i = 0; i < boards.length; i++) {
    const board = boards[i];
    if (board.teamname && board.teamname.length > 0) {
      firstLetters.push(board.teamname.charAt(0));
    }
  }

  return firstLetters;
}

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
      <Container
        sx={{ display: "flex", justifyContent: "center", overflowY: "scroll" }}
        maxWidth="xl"
      >
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
                <img
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

              ml: 95,
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
                <img
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
                <img
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
                  <img
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
              ml: 95,
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
                <img
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
                  <img
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
      <Container maxWidth="xl" sx={{ overflowY: "scroll" }}>
        <Grid container spacing={2} gap={4}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              position: "absolute",
              ml: 24,
              mt: 55,
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
                  justifyContent: "space-around",
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
                  Tickets
                </Typography>
                <Button
                  onClick={() => {}}
                  sx={{
                    width: 100,
                    color: "#172554",
                    mt: 1.5,
                    cursor: "pointer",

                    height: 30,
                    fontSize: "12px",
                    borderRadius: "12px",
                  }}
                >
                  All tickets
                </Button>
                <Button
                  onClick={() => {}}
                  sx={{
                    width: 100,
                    cursor: "pointer",

                    color: "#172554",
                    mt: 1.5,
                    height: 30,
                    fontSize: "12px",
                    borderRadius: "12px",
                  }}
                >
                  OverView
                </Button>
                <Button
                  onClick={() => {}}
                  sx={{
                    width: 100,
                    color: "#172554",
                    mt: 1.5,
                    height: 30,
                    cursor: "pointer",

                    fontSize: "12px",
                    borderRadius: "12px",
                  }}
                >
                  Completed
                </Button>
              </Grid>
              <Divider />
              {tickets?.map((ticket: any, i: any) => {
                return (
                  <>
                    <div className="flex items-center justify-evenly " key={i}>
                      <div>{ticket?.icon}</div>

                      {ticket?.title}
                      <div className="ml-5">{ticket?.status}</div>
                      <div className="ml-5">{ticket?.Date}</div>
                    </div>
                  </>
                );
              })}
              <Divider />
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="text"
                  sx={{ color: "#172554", fontSize: "10px" }}
                >
                  See More
                </Button>
                <Button
                  variant="text"
                  sx={{ color: "#172554", fontSize: "10px" }}
                >
                  Add New Ticket
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={2} gap={4}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              position: "absolute",
              ml: 95,
              mt: 57,
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
                  Boards
                </Typography>
                <Button
                  onClick={() => {}}
                  variant="text"
                  sx={{
                    width: 100,
                    color: "#172554",
                    mt: 1.5,
                    cursor: "pointer",

                    height: 30,
                    fontSize: "12px",
                    borderRadius: "12px",
                  }}
                >
                  Recents
                </Button>
              </Grid>
              <Divider />
              {Boards?.map((board: any, i: any) => {
                return (
                  <>
                    <Grid container xs={12} sx={{ mt: 1 }}>
                      <Paper
                        elevation={2}
                        sx={{
                          backgroundColor: "#E7ECFF",
                          width: "100%",
                          display: "flex",

                          justifyContent: "space-around",
                        }}
                      >
                        <Typography sx={{ color: "#172554", fontSize: "12px" }}>
                          {board.teamname}
                        </Typography>
                        <Typography sx={{ color: "#172554", fontSize: "12px" }}>
                          {board?.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  </>
                );
              })}
              <Divider style={{ marginTop: 2 }} />
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Button
                  variant="text"
                  sx={{ color: "#172554", fontSize: "10px" }}
                >
                  Create new board
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DasboardCards;
