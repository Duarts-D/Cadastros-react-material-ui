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
import { useDrawerContext } from "../../contexts";
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
              src="https://scontent.fgyn18-1.fna.fbcdn.net/v/t39.30808-1/449818309_8225223580869711_5381823924067227109_n.jpg?stp=c0.181.1521.1521a_dst-jpg_s160x160_tt6&_nc_cat=101&ccb=1-7&_nc_sid=fe756c&_nc_ohc=on_CGanN9n8Q7kNvgG9JF0K&_nc_oc=AdhxUPcoJo7uqMJoDjd9GmPW17nEf_9WX_7wU6pe3Zn3OiXyBYnZMzvvORkjLoD1TsQJCKnjVSFFBt4Roo8B9w4N&_nc_zt=24&_nc_ht=scontent.fgyn18-1.fna&_nc_gid=A5y50zNiBisjKcXuaxHnsPt&oh=00_AYDe9dsyvNpEuMxz1RGZqXxyq_LizGrNlb98dkR1z0-jtg&oe=67ADF625"
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
          <Divider />
        </Box>
      </Drawer>
      <Box height={"100vh"} marginLeft={smDow ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
