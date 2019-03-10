import main, {ProgramError} from '../library';

main(() => {
  throw new ProgramError(123, 'hello, program error!');
});
