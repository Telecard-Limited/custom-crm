"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { Box, Container, GlobalStyles, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
type Props = {
  /**
   * Allows the parent component to modify the state when the
   * menu button is clicked.
   */
  onMenuButtonClick(): void;
};
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Appbar = (props: Props) => {
  const router = useRouter();
  return (
    <nav
      className={cn({
        "bg-white text-zinc-500": true, // colors
        "flex items-center": true, // layout
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true, //positioning & styling
      })}
    >
      <div className="text-lg font-bold">Admin Panel</div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <div className="gap-6 gap-x-4 ">
        <Grid container sx={{ gap: "3" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
            component={"button"}
          >
            <img
              src="/images/contacticons.svg"
              style={{
                width: "16px",
                height: "16px",
                marginTop: 2,
              }}
              alt="contacticon"
            />
            <Typography sx={{ color: "#172554", ml: 1.5 }}>Contacts</Typography>
          </Grid>
        </Grid>
      </div>
      <div className="gap-6 gap-x-4 ">
        <Grid container sx={{ gap: "3", ml: 3.5 }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
            component={"button"}
            onClick={() => router.push("/dashboard/report")}
          >
            <img
              src="/images/reporticons.svg"
              style={{
                width: "16px",
                height: "16px",
                marginTop: 2,
              }}
              alt="contacticon"
            />
            <Typography sx={{ color: "#172554", ml: 1.5 }}>Reports</Typography>
          </Grid>
        </Grid>
      </div>
      <div className="gap-6 gap-x-4 ">
        <Grid container sx={{ gap: "3", ml: 3.5 }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
            component={"button"}
          >
            <img
              src="/images/boardicons.svg"
              style={{
                width: "16px",
                height: "16px",
                marginTop: 2,
              }}
              alt="contacticon"
            />
            <Typography sx={{ color: "#172554", ml: 1.5 }}>Boards</Typography>
          </Grid>
        </Grid>
      </div>
      <div className="gap-6 gap-x-4 ">
        <Grid container sx={{ gap: "3", ml: 3.5 }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
            component={"button"}
          >
            <img
              src="/images/profileicon.svg"
              style={{
                width: "16px",
                height: "16px",
                marginTop: 2,
              }}
              alt="contacticon"
            />
            <Typography sx={{ color: "#172554", ml: 1.5 }}>Profile</Typography>
          </Grid>
        </Grid>
      </div>
      <div className="gap-6 gap-x-4 ">
        <Grid container sx={{ gap: "3", ml: 3.5 }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
            component={"button"}
            onClick={() => router.push("/dashboard/forms")}
          >
            <img
              src="/images/createform.png"
              style={{
                width: "16px",
                height: "16px",
                marginTop: 2,
              }}
              alt="contacticon"
            />
            <Typography sx={{ color: "#172554", ml: 1.5 }}>Forms</Typography>
          </Grid>
        </Grid>
      </div>
      <div className="gap-6 gap-x-4 ">
        <Grid container sx={{ gap: "3", ml: 3.5 }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
            component={"button"}
          >
            <img
              src="/images/helpicon.svg"
              style={{
                width: "16px",
                height: "16px",
                marginTop: 2,
              }}
              alt="contacticon"
            />
            <Typography sx={{ color: "#172554", ml: 1.5 }}>
              Help Center
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Appbar;
