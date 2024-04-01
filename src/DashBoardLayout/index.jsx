import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import gpLogo from "../images/gp_logo.png"
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Grid } from '@mui/material'
import DashBoard from './DashBoard';
const drawerWidth ="17rem";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
//   justifyContent: 'space-evenly',
  padding: theme.spacing(0, 5),
  marginTop:theme.spacing(4),
  // backgroundColor:"#eee"
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
   
    "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper":{
        backgroundColor:"black",
        color:"white"
    },
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const MainContentLayout=()=> {
const navigate = useNavigate();
const pathName = useLocation().pathname
console.log("pathName", pathName);
const navData =  [
  {
    // "logo":HomeSvg,
    name: "DashBoard",
    path: "dashboard",
  },
  {
    // "logo":Vector,
    name: "Admins",
    path: "admins",
  },
  {
    // "logo":Vector,
    name: "Technicians",
    path: "technicians",
  },
  {
    // "logo":Vector,
    name: "Test EOrder",
    path: "test-form",
  },
  {
    // "logo":Vector,
    name: "Molecular Test Order",
    path: "molecular-form",
  },
  {
    // "logo":Vector,
    name: "Toxicolgogy Test Order",
    path: "toxicology-form",
  },
  {
    // "logo":Vector,
    name: "Forensic Test Order",
    path: "forensic-form",
  }

];
  const [open, setOpen] = React.useState(true);

const MouseOver=(event)=>{
  event.target.style.background = 'grey';
}
const MouseOut=(e)=>{
  e.target.style.background='red'
}
  const handleDrawerOpenClose = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <Drawer variant="permanent" open={open}>
        {/* <DrawerHeader sx={{display:"flex"}}>
           
            <img src={gpLogo} alt={"logo"}/>
            <h3>GENEPACE</h3>
        </DrawerHeader> */}
        <List>
          {["GENEPACE", "email"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={gpLogo} alt={"logo"} sx={{ margin: "1rem" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider sx={{ border: "0.1px solid grey" }} />
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}

        <List>
          {navData.map((item, index) => (
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {open && (
                  <ListItemText sx={{ background: "none" }}>
                    {item.name}
                  </ListItemText>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Grid container sx={{ backgroundColor: "#eee" }}>
        <Grid xs={12}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerOpenClose}>
              <MenuIcon />
            </IconButton>
          </DrawerHeader>
        </Grid>
        <Grid xs={12}>
          {/* {
            (pathName=="/dashboard")&&( <DashBoard/>) ||
            (pathName == "/test-form") && (<></>)
          } */}

          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
} 
export default MainContentLayout