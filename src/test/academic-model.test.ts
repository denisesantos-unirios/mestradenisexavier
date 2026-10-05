import { describe, expect, it } from "vitest";
import { sistemaAcademicoDiagram } from "@/components/engenharia-software-2/aula17/EstudoCasoSection";

describe("Sistema Acadêmico — multiplicidades", () => {
  it("permite que um aluno se matricule em várias turmas e que cada turma receba vários alunos", () => {
    expect(sistemaAcademicoDiagram).toContain('Turma "0..*" -- "0..*" Aluno : matricula');
  });
});