import {ProgramError} from './program-error';

export type Program = (
  args: string[],
) => Promise<void | number> | void | number;

export function main(program: Program): void {
  let [, , ...args] = process.argv;

  Promise.resolve()
    .then(() => program(args))
    .then(
      code => {
        if (typeof code !== 'number') {
          code = 0;
        }

        process.exit(code);
      },
      error => {
        if (error instanceof ProgramError) {
          let message = error.message;

          if (message) {
            console.error(message);
          }

          process.exit(error.code);
        } else {
          console.error(error instanceof Error ? error.stack : error);
          process.exit(1);
        }
      },
    );
}
