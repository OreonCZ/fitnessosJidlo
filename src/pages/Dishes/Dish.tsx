<<<<<<< HEAD
import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import { useParams } from 'react-router-dom';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  ListItems,
  SecondaryListItems,
  BottomListItems,
} from "../Dishes/listItemsDishes";
import "../../index.css";
import LOGO from "../../assets/LOGO.svg";
import { ThemeOptions } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import { Link as RedirectLink } from "react-router-dom";
import { dishes } from '../Dishes/Dishes';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

    /*return(
        <>
            
    )
    */
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const drawerWidth = "12rem";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: "#F2F2F2",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8),
      },
    }),
  },
}));

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#9471F6",
      contrastText: "#333333",
    },
    secondary: {
      main: "#6F40F6",
    },
    action: {
      selected: "#6F40F6",
      selectedOpacity: 0.2,
      hover: "#DCD4F6",
    },
  },
  typography: {
    fontFamily: "Nunito",
    fontSize: 16,
    htmlFontSize: 20,
    h5: {
      fontSize: "1.7rem",
      fontWeight: 700,
      lineHeight: 1.06,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 48,
          padding: "0 30px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderEndEndRadius: 5,
          borderTopRightRadius: 5,
          padding: "0px, 89px, 0px, 64px",
        },
      },
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
};

const defaultTheme = createTheme(themeOptions);

export default function Dish() {
  const id = parseInt(useParams().id);
  
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              backgroundColor: "#FFF", // keep right padding when drawer closed
            }}
            className="banger"
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "0.5rem",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <RedirectLink to={"/"}>
                <img src={LOGO} style={{ flexGrow: "inherit" }} alt="" />
              </RedirectLink>
            </Box>
            <Typography variant="h5" color={"#9471F6"}>
              Honzik Pikachu
            </Typography>
            <RedirectLink to={"/profile"}>
              <IconButton color="inherit">
                <Avatar
                  alt="Avatar"
                  src="/pika.png"
                  sx={{ width: 56, height: 56 }}
                />
              </IconButton>
            </RedirectLink>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            component="nav"
          >
            <Grid container flexGrow={1} xs={12} direction={"column"}>
              <Grid item xs={3} alignItems={"center"}>
                <ListItems open={open} />
                <Divider
                  variant={open ? "middle" : "fullWidth"}
                  sx={{ my: 2, color: "#333333", backgroundColor: "#333333" }}
                />
                <SecondaryListItems open={open} />
              </Grid>
            </Grid>
            <BottomListItems open={open} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: "white",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Typography align="center">
            <Box sx={{ marginTop: 5, fontSize: 30 }} component="nav">
              <Typography variant="h4" color="#9471F6">
                {dishes[id].name}
              </Typography>
              <img
                src={dishes[id].image}
                alt={dishes[id].name}
                style={{ width: "50", height: "auto" }}
              />
              <p>
              {dishes[id].description}
              </p>
              <div>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
              <RedirectLink
                to="/dishes"
                style={{ textDecoration: "none", color: "black", borderRadius: 40, marginTop: 5 }}
              >
                <button>
                <p>Zpět na jídla</p>
                </button>
              </RedirectLink>

            </Box>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

=======
import { Link } from "react-router-dom";

export function Dish() {
  return (
    <>
      <p>Obrazek</p>
      <p>Jmeno jidla</p>
      <p>Popisek jidla</p>
      <p>Tabulka - hodnoty</p>
      <p>Upvote</p>
      <p>Downvote</p>
      <Link to={"/dishes"}>
        <p>Go back to dishes</p>
      </Link>
      <Link to={"/"}>
        <p>Go back to dashboard</p>
      </Link>
    </>
  );
}
>>>>>>> c3fe7dea4db082c607a4501beb4abefef2ef8fc3
