import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostraInputBuscar?: boolean;
  aoMudarTextoDeBuscar?: (novoTexto: string) => void;
  textBotaoNovo?: string;
  mostraBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = "",
  mostraInputBuscar = false,
  aoMudarTextoDeBuscar,
  aoClicarEmNovo,
  textBotaoNovo = "Novo",
  mostraBotaoNovo = true,
}) => {
  const theme = useTheme();
  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {mostraInputBuscar && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBuscar?.(e.target.value)}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostraBotaoNovo && (
          <Button
            variant="contained"
            disableElevation
            color="primary"
            onClick={aoClicarEmNovo}
            startIcon={<Icon>add</Icon>}
          >
            {textBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
