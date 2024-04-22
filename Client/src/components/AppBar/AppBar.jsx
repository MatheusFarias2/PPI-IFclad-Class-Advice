import * as React from "react";

import './AppBar.css'

import logo from '../../assets/logoIF.png'

import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Avatar, Paper } from "@mui/material";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import Button from '@mui/material/Button'

import { defaultDark } from "../../themes/themes";
// import Notification from "../Notification/Notification";


// icons
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import BiotechIcon from "@mui/icons-material/Biotech";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 265;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
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
    overflowX: "hidden",
    whiteSpace: "nowrap",
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
        width: theme.spacing(9),
      },
    }),
    background: `linear-gradient(45deg, #5c1c8a ,#5d1c8b ,#20155f)`, // Gradiente linear roxo
  },
}));

export default function UiAppBar(internal) {
  const [open, setOpen] = React.useState(false);
  const [mouseOver, setMouseOver] = React.useState(false);

  // Estilos

  const typographyButtonStyle = {
    marginLeft: "25px",
  };

  const handleMouseEnter = () => {
    setMouseOver(true);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
    setOpen(false);
  };

  const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9] ;

  return (
    <ThemeProvider theme={defaultDark}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          open={open || mouseOver}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* <Divider /> */}
          <List component="nav" sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>

            <Box className="AppBoxLogo"> 
              <img src={logo} alt="IF" className="imglogo"/>
              <Typography variant="h6"  sx={{typographyButtonStyle, marginLeft: "52px"}}>
                Clad - Class Advice
              </Typography>
            </Box>
            
            <Box className="AppBox">
              {/* // ! Lista de Abas */}
              <Box className="ButtonBox">
                {/* Icone  */}
                <GraphicEqIcon fontSize="large" />
                {/* label  */}
                <Typography variant="h6" sx={typographyButtonStyle}>
                  Turmas
                </Typography>
              </Box>

              <Box className="ButtonBox">
                {/* Icone  */}
                <SchoolIcon fontSize="large" />
                {/* label  */}
                <Typography variant="h6" sx={typographyButtonStyle}>
                  Cursos
                </Typography>
              </Box>

              <Box className="ButtonBox">
                {/* Icone  */}
                <GroupIcon fontSize="large" />
                {/* label  */}
                <Typography variant="h6" sx={typographyButtonStyle}>
                  Professores
                </Typography>
              </Box>

              <Box className="ButtonBox">
                {/* Icone  */}
                <AutoStoriesIcon fontSize="large" />
                {/* label  */}
                <Typography variant="h6" sx={typographyButtonStyle}>
                  Disciplinas
                </Typography>
              </Box>

              <Box className="ButtonBox">
                {/* Icone  */}
                <DonutSmallIcon fontSize="large" />
                {/* label  */}
                <Typography variant="h6" sx={typographyButtonStyle}>
                  Setores
                </Typography>
              </Box>

              <Box className="ButtonBox">
                {/* Icone  */}
                <BiotechIcon fontSize="large" />
                {/* label  */}
                <Typography variant="h6" sx={typographyButtonStyle}>
                  Mostra de Ciências
                </Typography>
              </Box>
            </Box>

            <Divider />

            <Box className="UserBox">
              <Box className="ButtonBox">
                {/* Icone  */}
                <PersonIcon fontSize="large" />
                {/* label  */}
                <Typography variant="h6" sx={typographyButtonStyle}>
                  Minha Conta
                </Typography>
              </Box>

              <Box className="ButtonBox">
                {/* Icone  */}
                <SettingsIcon fontSize="large" />
                {/* label  */}
                <Typography variant="h6" sx={typographyButtonStyle}>
                  Configurações
                </Typography>
              </Box>
            </Box>
          </List>
        </Drawer>
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              justifyContent: "flex-end", // keep right padding when drawer closed
            }}
          >
            <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
              <Avatar />
              {/* <Notification /> */}
            </Stack>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            padding: "90px 20px 20px 20px ",
          }}
        >
          {/* // ! Box principal (main) */}
          {internal.children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
