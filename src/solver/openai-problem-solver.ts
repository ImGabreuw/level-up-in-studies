import { Configuration, OpenAIApi } from 'openai';

import * as dotenv from 'dotenv';

dotenv.config();

export class OpenaiProblemSolver {
  private readonly configuration: Configuration;
  private readonly openai: OpenAIApi;

  constructor() {
    this.configuration = new Configuration({
      organization: process.env.OPENAI_ORGANIZATION_ID,
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  async solve(problem: string): Promise<string> {
    const response = await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: problem,
      max_tokens: 4000,
      temperature: 0.5,
    });

    const solutions = response.data.choices;

    return solutions[0].text ?? 'Sem solução';
  }
}
