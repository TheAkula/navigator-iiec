export function poll<
  P extends unknown[],
  T extends (...args: P) => Promise<void> | void,
>(fn: T, retries = Infinity, time = 1000, ...params: P): NodeJS.Timer {
  const interval = setInterval(async () => {
    try {
      await fn(...params)
    } catch (err) {
      clearInterval(interval)

      if (retries-- > 0) {
        poll(fn, retries, time, ...params)
      } else {
        throw new Error((err as Error).message)
      }
    }
  }, time)

  return interval
}
