import { PromptProblemSolver } from './prompt-problem-solver';
import { OpenaiProblemSolver } from './openai-problem-solver';

(async () => {
  const promptProblemSolver = new PromptProblemSolver();
  const openaiProblemSolver = new OpenaiProblemSolver();

  const problemStatement = await promptProblemSolver.getUserProblemStatement();
  const solution = await openaiProblemSolver.solve(problemStatement);

  console.log(solution);
})();
