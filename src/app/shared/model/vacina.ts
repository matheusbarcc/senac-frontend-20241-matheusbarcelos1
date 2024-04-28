import { Pais } from "./pais";
import { Pessoa } from "./pessoa";

export class Vacina{
  id: number
  nome: string
  paisOrigem: Pais
  pesquisadorResponsavel: Pessoa
  dataInicioPesquisa: Date
  estagio: number
  media: number
}
