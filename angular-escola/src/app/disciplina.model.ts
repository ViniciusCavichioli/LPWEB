import {Professor} from './Professor';
export class Disciplina {
  codigo: number;
  professor: Professor;
  nome: string;
  descricao: string;

  constructor(nome: string, descricao: string, codigo: number, professor: Professor) {
    this.nome = nome;
    this.descricao = descricao;
    this.codigo = codigo;
    this.professor = professor;
  }
}
