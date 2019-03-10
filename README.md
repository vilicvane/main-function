[![NPM Package](https://badge.fury.io/js/main-function.svg)](https://www.npmjs.com/package/main-function)
[![Build Status](https://travis-ci.org/vilic/main-function.svg?branch=master)](https://travis-ci.org/vilic/main-function)

# Main Function

A simple wrapper that handles error and return code.

## Install

```sh
yarn add main-function
```

## Usage

```ts
import main, {ProgramError} from 'main-function';

main(async (args: string[]) => {
  // Throw an `ProgramError` to exit:
  throw new ProgramError(0, 'Some friendly error message');

  // Or throw a normal error (will print error stack and exit with code `1`):
  throw new Error():

  // Optional return statement for exit code:
  return 0;
});
```

## License

MIT License.
