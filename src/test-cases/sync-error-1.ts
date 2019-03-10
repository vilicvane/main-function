import main from '../library';

main(() => {
  throw new Error('hello, error!');
});
