import prompts from 'prompts';

export class PromptProblemSolver {
  async getUserProblemStatement(): Promise<string> {
    const response = await prompts({
      type: 'text',
      name: 'problem_statement',
      message: 'Insira o enunciado do problema: ',
      validate: (value) =>
        value.trim().length === 0 ? 'Enunciado inválido' : true,
    });

    return response.problem_statement;
  }
}
