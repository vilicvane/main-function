import main, {ProgramError} from 'main-function';

main(() => {
  throw new ProgramError(123, 'hello, program error!');
});
