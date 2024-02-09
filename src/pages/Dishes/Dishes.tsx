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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {
  ListItems,
  SecondaryListItems,
  BottomListItems,
} from "../Dishes/listItemsDishes";
import "../../index.css";
import LOGO from "../../assets/LOGO.svg";
import { ThemeOptions } from "@mui/material/styles";
import { Avatar, colors } from "@mui/material";
import { Link as RedirectLink } from "react-router-dom";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
/*
    
        */
function Copyright(props: any) {
  return <></>;
}


export const dishes = [
  { name: 'Svíčková', image: '/pika.png', description: 'xdddddd' },
  { name: 'Hovězí guláš', image: '/pika.png', description: 'xdddddd' },
  { name: 'Kuřecí smažák', image: '/pika.png', description: 'sus' },
  { name: 'Rýžová nádivka', image: '/pika.png', description: 'xdddddd' },
  { name: 'Těstoviny s rajčaty', image: '/pika.png', description: 'kdo' },
  { name: 'Pizza', image: '/pika.png', description: 'xdddddd' },
  { name: 'Sushi', image: '/pika.png', description: 'xdddddd' },
  { name: 'Burger', image: '/pika.png', description: 'xdddddd' },
  { name: 'Kung Pao', image: '/pika.png', description: 'xdddddd' },
  { name: 'McDonald', image: '/pika.png', description: 'xdddddd' },
  { name: 'Salát', image: '/pika.png', description: 'xdddddd' },
  { name: 'Polívka z pytlíku', image: '/pika.png' },
];


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

export default function Dashboard() {
  const [state, setState] = React.useState({
    fitness: false,
    haram: false,
    sladky: false,
    slany: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  
  const { fitness, haram, sladky, slany } = state;

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
          <Box sx={{
    display: 'flex',
    alignItems: 'left', // Center vertically
    justifyContent: 'left', // Center horizontally
    }}>
      <FormControl sx={{ m: 3, top: 20 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Filtr</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={fitness} onChange={handleChange} name="fitness" />
            }
            label="fitness"
          />
          <FormControlLabel
            control={
              <Checkbox checked={haram} onChange={handleChange} name="haram" />
            }
            label="haram"
          />
          <FormControlLabel
            control={
              <Checkbox checked={sladky} onChange={handleChange} name="sladky" />
            }
            label="sladky"
          />
          <FormControlLabel
            control={
              <Checkbox checked={slany} onChange={handleChange} name="slany" />
            }
            label="slany"
          />
        </FormGroup>
        <FormHelperText>Kategorie jidel</FormHelperText>
      </FormControl>
    </Box>
      <Box sx={{ marginTop: -25, align: "center", marginLeft: 10}} component="nav">
        <Typography variant="h4" color="#9471F6" textAlign="center" marginLeft={3}>
          Dishes
        </Typography>

        <Grid container spacing={2}>
          {dishes.map((dish, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, marginLeft: 8, marginTop: 4, borderRadius: 5}}>
                <RedirectLink to={`/dish/${index}`} style={{ textDecoration: 'none', color: '#9471F6', }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={dish.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {dish.name} {/* Replace with the actual dish name */}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {dish.description} {/* Replace with the actual dish description */}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  </RedirectLink>
                </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Typography>

        </Box>
      </Box>
    </ThemeProvider>
=======
import { Link } from "react-router-dom";

export function Dishes() {
  return (
    <>
      <h2>Dishes</h2>
      <p>Filtr</p>
      <ul>
        <Link to={"/dish"}>
          <li>
            <p>Obrazek</p>
            <p>Jmeno jidla</p>
            <p>Prejit</p>
          </li>
        </Link>
        <li>
          <p>Obrazek</p>
          <p>Jmeno jidla</p>
          <p>Prejit</p>
        </li>
        <li>
          <p>Obrazek</p>
          <p>Jmeno jidla</p>
          <p>Prejit</p>
        </li>
      </ul>
      <Link to={"/"}>
        <p>Go back to dashboard</p>
      </Link>
    </>
>>>>>>> c3fe7dea4db082c607a4501beb4abefef2ef8fc3
  );
}
