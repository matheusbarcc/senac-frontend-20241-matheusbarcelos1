import { baseSeletor } from "./base.seletor";

export class VacinacaoSeletor extends baseSeletor{
  nomePessoa: string
  nomeVacina: string
  dataAplicacaoInicio: Date
  dataAplicacaoFinal: Date
  avaliacao: number
}
