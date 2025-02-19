import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Pagina inicial"
      barraDeFerramenta={<FerramentasDeDetalhe mostrarBotaoSalvarEFechar />}
    >
      testando
    </LayoutBaseDePagina>
  );
};
