import main, {ProgramError} from '../library';

main(async () => {
  throw new ProgramError(123, 'hello, program error!');
});
