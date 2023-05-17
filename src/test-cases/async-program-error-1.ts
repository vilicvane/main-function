import main, {ProgramError} from 'main-function';

main(async () => {
  throw new ProgramError(123, 'hello, program error!');
});
