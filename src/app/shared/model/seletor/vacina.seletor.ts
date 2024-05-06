import { baseSeletor } from "./base.seletor"

export class VacinaSeletor extends baseSeletor{
  nome: string
  nomePais: string
  nomePesquisador: string
  dataInicioPesquisa: Date
  dataFinalPesquisa: Date
  estagio: number
  media: number
}
