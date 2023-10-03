import {ExtendableError} from 'extendable-error';

export class ProgramError extends ExtendableError {
  constructor(
    readonly code: number,
    message?: string,
  ) {
    super(message);
  }
}
