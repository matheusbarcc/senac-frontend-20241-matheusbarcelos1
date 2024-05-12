import { Pais } from "./pais";

export class Pessoa{
  id: number;
  nome: string;
  cpf: number;
  sexo: string;
  dataNascimento: Date;
  tipo: number;
  pais: Pais;
}
