import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDrawerContext } from "../contexts";

interface IappLayoutBaseDePaginaProps {
  children: React.ReactNode;
  titulo: string;
  barraDeFerramenta: React.ReactNode | undefined;
}

export const LayoutBaseDePagina: React.FC<IappLayoutBaseDePaginaProps> = ({
  children,
  titulo,
  barraDeFerramenta,
}) => {
  const theme = useTheme();
  const smDow = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDow = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        gap={1}
        alignItems="center"
        height={theme.spacing(smDow ? 6 : mdDow ? 8 : 12)}
      >
        {smDow && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          variant={smDow ? "h5" : mdDow ? "h4" : "h3"}
        >
          {titulo}
        </Typography>
      </Box>
      {barraDeFerramenta && <Box>{barraDeFerramenta}</Box>}
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
