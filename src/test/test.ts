import * as ChildProcess from 'child_process';
import * as Path from 'path';

const TEST_CASES_DIR_NAME = Path.join(__dirname, '../../bld/test-cases');

test('should a program receive args', () => {
  const result = ChildProcess.spawnSync(
    process.argv0,
    [Path.join(TEST_CASES_DIR_NAME, 'args-1'), 'hello', 'world'],
    {},
  );

  expect(extractSpawnResult(result)).toMatchInlineSnapshot(`
    {
      "code": 0,
      "stderr": "",
      "stdout": "[ 'hello', 'world' ]
    ",
    }
  `);
});

test('should a synchronous program function exit with implicit code 0', () => {
  const result = ChildProcess.spawnSync(
    process.argv0,
    [Path.join(TEST_CASES_DIR_NAME, 'sync-okay-implicit-1')],
    {},
  );

  expect(extractSpawnResult(result)).toMatchInlineSnapshot(`
    {
      "code": 0,
      "stderr": "",
      "stdout": "hello, world!
    ",
    }
  `);
});

test('should a synchronous program function exit with explicit code 0', () => {
  const result = ChildProcess.spawnSync(
    process.argv0,
    [Path.join(TEST_CASES_DIR_NAME, 'sync-okay-explicit-1')],
    {},
  );

  expect(extractSpawnResult(result)).toMatchInlineSnapshot(`
    {
      "code": 0,
      "stderr": "",
      "stdout": "hello, world!
    ",
    }
  `);
});

test('should an asynchronous program function exit with implicit code 0', () => {
  const result = ChildProcess.spawnSync(
    process.argv0,
    [Path.join(TEST_CASES_DIR_NAME, 'async-okay-implicit-1')],
    {},
  );

  expect(extractSpawnResult(result)).toMatchInlineSnapshot(`
    {
      "code": 0,
      "stderr": "",
      "stdout": "hello, world!
    ",
    }
  `);
});

test('should an asynchronous program function exit with explicit code 0', () => {
  const result = ChildProcess.spawnSync(
    process.argv0,
    [Path.join(TEST_CASES_DIR_NAME, 'async-okay-explicit-1')],
    {},
  );

  expect(extractSpawnResult(result)).toMatchInlineSnapshot(`
    {
      "code": 0,
      "stderr": "",
      "stdout": "hello, world!
    ",
    }
  `);
});

test('should a synchronous program function exit with code of `ProgramError`', () => {
  const result = ChildProcess.spawnSync(
    process.argv0,
    [Path.join(TEST_CASES_DIR_NAME, 'sync-program-error-1')],
    {},
  );

  expect(extractSpawnResult(result)).toMatchInlineSnapshot(`
    {
      "code": 123,
      "stderr": "hello, program error!
    ",
      "stdout": "",
    }
  `);
});

test('should an asynchronous program function exit with code of `ProgramError`', () => {
  const result = ChildProcess.spawnSync(
    process.argv0,
    [Path.join(TEST_CASES_DIR_NAME, 'async-program-error-1')],
    {},
  );

  expect(extractSpawnResult(result)).toMatchInlineSnapshot(`
    {
      "code": 123,
      "stderr": "hello, program error!
    ",
      "stdout": "",
    }
  `);
});

test('should a synchronous program function exit with code `1` by thrown error', () => {
  const result = ChildProcess.spawnSync(
    process.argv0,
    [Path.join(TEST_CASES_DIR_NAME, 'sync-error-1')],
    {},
  );

  expect(extractSpawnResult(result)).toMatchInlineSnapshot(`
    {
      "code": 1,
      "stderr": "Error: hello, error!
    ",
      "stdout": "",
    }
  `);
});

test('should an asynchronous program function exit with code `1` by thrown error', () => {
  const result = ChildProcess.spawnSync(
    process.argv0,
    [Path.join(TEST_CASES_DIR_NAME, 'async-error-1')],
    {},
  );

  expect(extractSpawnResult(result)).toMatchInlineSnapshot(`
    {
      "code": 1,
      "stderr": "Error: hello, error!
    ",
      "stdout": "",
    }
  `);
});

interface SpawnResult {
  stdout: string;
  stderr: string;
  code: number | null;
}

function extractSpawnResult({
  stdout,
  stderr,
  status,
}: ChildProcess.SpawnSyncReturns<Buffer>): SpawnResult {
  return {
    stdout: stdout.toString(),
    stderr: stderr.toString().replace(/^\s+at .+\n/gm, ''),
    code: status,
  };
}
