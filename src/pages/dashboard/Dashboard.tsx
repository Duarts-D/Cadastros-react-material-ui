import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Pagina inicial"
      barraDeFerramenta={
        <FerramentasDaListagem mostraInputBuscar textBotaoNovo="Nova" />
      }
    >
      testando
    </LayoutBaseDePagina>
  );
};
