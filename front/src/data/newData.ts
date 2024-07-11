export type Notas = {
  id: number;
  filial: string;
  doc: string;
  serie: string;
  fornecedor: string;
  emissao: string;
  inclusao: string;
  valor: string;
  vencimento: string;
  user: string;
  status: string;
  label: string;
  prioridade: string;
  obs: string;
};

export const data: Notas[] = [
  {
    id: 1,
    filial: "0108",
    doc: "000150416",
    serie: "1",
    fornecedor: "063054 1 - COMERCIAL GIRHOS DE ROLAMENTOS LTDA",
    emissao: "2024-07-02", // Atualizado para ISO
    inclusao: "2024-07-02", // Atualizado para ISO
    valor: "2386,50",
    vencimento: "2024-08-01", // Atualizado para ISO
    user: "guilherme.braz",
    status: "classificar",
    label: "Revenda",
    prioridade: "alta",
    obs: "01082024 2.386,50 ITEM PARA A XAG DINO"
  },
  {
    id: 2,
    filial: "0101",
    doc: "000000015",
    serie: "900",
    fornecedor: "057526 01 - SILVIA SCHIAVO PEREIRA 62666835049",
    emissao: "2024-07-01", // Atualizado para ISO
    inclusao: "2024-07-01", // Atualizado para ISO
    valor: "5089,43",
    vencimento: "2024-07-01", // Atualizado para ISO
    user: "silvia.pereira",
    status: "classificar",
    label: "Despesa/Imobilizado",
    prioridade: "alta",
    obs: ""
  },
  {
    id: 3,
    filial: "0109",
    doc: "000007361",
    serie: "40",
    fornecedor: "026474 01 - CESCA E CIA LTDA",
    emissao: "2024-07-01", // Atualizado para ISO
    inclusao: "2024-07-01", // Atualizado para ISO
    valor: "650,95",
    vencimento: "2024-07-14", // Atualizado para ISO
    user: "miguel.aranjo",
    status: "classificar",
    label: "Despesa/Imobilizado",
    prioridade: "media",
    obs: "Dpto 52 R 458,86 Dpto 55 R 192,08 Vcto 15072024"
  },
  {
    id: 4,
    filial: "0101",
    doc: "000000415",
    serie: "U",
    fornecedor:
      "073780 1 - REJANE TERESINHA SOZIN GIACCOMINI DESENVOLVIMENTO E GESTAO DE PESSOAS",
    emissao: "2024-07-01", // Atualizado para ISO
    inclusao: "2024-07-01", // Atualizado para ISO
    valor: "15500",
    vencimento: "2024-07-05", // Atualizado para ISO
    user: "stefani.godoi",
    status: "classificar",
    label: "Despesa/Imobilizado",
    prioridade: "alta",
    obs: "Pagamento via deposito."
  },
  {
    id: 5,
    filial: "0108",
    doc: "000034530",
    serie: "1",
    fornecedor:
      "053852 01 - FOGGIATTO DISTRIBUIDORA DE TINTAS E FERRAGENS EIRELI",
    emissao: "2024-07-01", // Atualizado para ISO
    inclusao: "2024-07-01", // Atualizado para ISO
    valor: "2745",
    vencimento: "2024-07-15", // Atualizado para ISO
    user: "guilherme.braz",
    status: "classificada",
    label: "Materia Prima",
    prioridade: "baixa",
    obs: "15072024 2.745,00 MATERIAL AUXILIAR PRODUTIVO MARCOS"
  },
  {
    id: 6,
    filial: "0106",
    doc: "000000337",
    serie: "U",
    fornecedor: "018297 02 - JULIO CESAR DE ALMEIDA PEREIRA",
    emissao: "2024-07-01", // Atualizado para ISO
    inclusao: "2024-07-01", // Atualizado para ISO
    valor: "5400",
    vencimento: "2024-07-01", // Atualizado para ISO
    user: "silvia.pereira",
    status: "classificar",
    label: "Despesa/Imobilizado",
    prioridade: "alta",
    obs: "0106 - 50 CC2 50 CC3"
  },
  {
    id: 7,
    filial: "0110",
    doc: "000005578",
    serie: "2",
    fornecedor: "072168 01 - PIONEIRO COMERCIAL DE PECAS AUTOMOTIVAS LTDA",
    emissao: "2024-07-01", // Atualizado para ISO
    inclusao: "2024-07-01", // Atualizado para ISO
    valor: "2818",
    vencimento: "2024-07-29", // Atualizado para ISO
    user: "giovana.arruda",
    status: "classificar",
    label: "Revenda",
    prioridade: "alta",
    obs: ""
  },
  {
    id: 8,
    filial: "0103",
    doc: "000000536",
    serie: "001",
    fornecedor: "069395 01 - KIRSTEN TRANSPORTES LTDA",
    emissao: "2024-07-01", // Atualizado para ISO
    inclusao: "2024-07-01", // Atualizado para ISO
    valor: "3700",
    vencimento: "2024-07-02", // Atualizado para ISO
    user: "maria.fernandes",
    status: "classificar",
    label: "Despesa/Imobilizado",
    prioridade: "alta",
    obs: "frete"
  },
  {
    id: 9,
    filial: "0110",
    doc: "000000338",
    serie: "U",
    fornecedor: "018297 02 - JULIO CESAR DE ALMEIDA PEREIRA",
    emissao: "2024-07-01", // Atualizado para ISO
    inclusao: "2024-07-01", // Atualizado para ISO
    valor: "10400",
    vencimento: "2024-07-01", // Atualizado para ISO
    user: "silvia.pereira",
    status: "classificar",
    label: "Despesa/Imobilizado",
    prioridade: "alta",
    obs: "0110 - 17 CC2 28 CC3 55 CC4"
  },
  {
    id: 10,
    filial: "0109",
    doc: "000059164",
    serie: "D",
    fornecedor: "048150 01 - SERRANO SERVICOS POSTAL LTDA.",
    emissao: "2024-07-01", // Atualizado para ISO
    inclusao: "2024-07-01", // Atualizado para ISO
    valor: "476,95",
    vencimento: "2024-07-08", // Atualizado para ISO
    user: "miguel.aranjo",
    status: "classificar",
    label: "Despesa/Imobilizado",
    prioridade: "alta",
    obs: "Dpto 53 R 76,40 Dpto 52 R 345,10 Dpto 56 R 55,45 Vcto 05072024"
  }
];
