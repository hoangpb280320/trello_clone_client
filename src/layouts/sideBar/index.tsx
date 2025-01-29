import { APP_BAR_HEIGHT, DRAWER_WIDTH } from "../../constant";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  DrawerProps,
  List,
  ListItemButton as ListItemButtonMui,
  ListItemIcon,
  ListItemText,
  ListSubheader as ListSubheaderMui,
} from "@mui/material";
import { CSSObject, styled, Theme } from "@mui/material/styles";

import "./styles.scss";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "../../components/common/iconButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useLocation, useNavigate } from "react-router";
import PersonalBoard from "./personalBoard";

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(2)} + 1px)`,
  // [theme.breakpoints.up("sm")]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
});

interface SideBarDrawerProp extends DrawerProps {
  open: boolean;
}

const SideBarDrawer = styled(Drawer)<SideBarDrawerProp>(({ theme }) => ({
  "& .MuiDrawer-paper": {
    marginTop: APP_BAR_HEIGHT,
    overflow: "visible",
    backgroundColor: theme.palette.background.default,
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const OpenIcon = styled("div")(({ theme }) => ({
  width: "25px",
  height: "25px",
  backgroundColor: theme.palette.background.default,
  borderRadius: "50%",
  border: "1px solid #383c3f",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

  position: "absolute",
  top: "2%",
  right: "-12px",
}));

export const ListItemButton = styled(ListItemButtonMui)(({ theme }) => ({
  "& .MuiListItemIcon-root": {
    color: theme.palette.text.primary,
    minWidth: "30px",
  },
  "& .MuiTypography-root": {
    fontSize: "14px",
  },
}));

export const ListSubheader = styled(ListSubheaderMui)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  fontWeight: "bold",
  fontSize: "16px",
}));

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(true);
  const [openSettings, setOpenSettings] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <SideBarDrawer variant="permanent" open={open}>
      {!open ? (
        <OpenIcon onClick={() => setOpen(true)}>
          <KeyboardArrowRightIcon fontSize="small" />
        </OpenIcon>
      ) : (
        <>
          <div className="sidebar-header">
            <Box display="flex" alignItems="center" gap={1}>
              <div className="sidebar-logo">T</div>
              <div className="sidebar-info">
                <p>Trello Workspace</p>
                <p>free</p>
              </div>
            </Box>
            <IconButton regtangle onClick={() => setOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List
            sx={{ width: "100%" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => handleNavigate("/dashboard")}
              selected={location.pathname === "/dashboard"}
            >
              <ListItemIcon>
                <SpaceDashboardOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Boards" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Person2OutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Members" />
              <AddIcon fontSize="small" />
            </ListItemButton>
            <ListItemButton onClick={() => setOpenSettings(!openSettings)}>
              <ListItemIcon>
                <SettingsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Workspace settings"
                sx={{ "& .MuiTypography-root": { fontWeight: 600 } }}
              />
              {openSettings ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSettings} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            subheader={<ListSubheader>Workspace views</ListSubheader>}
            sx={{
              backgroundColor: (theme) => theme.palette.background.default,
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <TableChartOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Table" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </List>
          <PersonalBoard />
        </>
      )}
    </SideBarDrawer>
  );
}
