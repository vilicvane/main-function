export const BACKGROUND = new Promise<never>(() => {});

export function SIGNAL(
  signal: NodeJS.Signals | NodeJS.Signals[] = 'SIGINT',
): Promise<void> {
  const signals = Array.isArray(signal) ? signal : [signal];

  return new Promise(resolve => {
    for (const signal of signals) {
      process.on(signal, () => resolve());
    }
  });
}
