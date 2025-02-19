import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import React from "react";
import { Box, useMediaQuery } from "@mui/system";
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

interface IListItemLinkProps {
  to: string;
  label: string;
  icon: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const theme = useTheme();
  const smDow = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDow ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="Remy Sharp"
              src="https://scontent.fgyn18-1.fna.fbcdn.net/v/t39.30808-1/449818309_8225223580869711_5381823924067227109_n.jpg?stp=c0.181.1521.1521a_dst-jpg_s160x160_tt6&_nc_cat=101&ccb=1-7&_nc_sid=fe756c&_nc_ohc=hAq01cv1Nu8Q7kNvgHbzBGK&_nc_oc=AdgCLIP1l5xaTvJyIzMdjEF7yCej6tKl6SHW2rNT79JWhes-uE08n4VJFN7riwrwsVafFsMcROO-xFdxeCAX8OKP&_nc_zt=24&_nc_ht=scontent.fgyn18-1.fna&_nc_gid=Am8ZqSDhlXqbavYWMmzEvrh&oh=00_AYCuwUVU8VR_MbAYM7j40XY_sCvsPZ2G5wBllbr4IKgvOw&oe=67BC0625"
            />
          </Box>
          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOptions) => (
                <ListItemLink
                  to={drawerOptions.path}
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  label={drawerOptions.label}
                  onClick={smDow ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alternar tema" />
              </ListItemButton>
            </List>
          </Box>
          <Divider />
        </Box>
      </Drawer>
      <Box height={"100vh"} marginLeft={smDow ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
