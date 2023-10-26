async function pollHadler<
  P extends unknown[],
  T extends (...args: P) => Promise<void> | void,
>(fn: T, retries = Infinity, time = 1000, ...params: P): Promise<void> {
  try {
    await fn(...params)
  } catch (err) {
    if (--retries > 0) {
      pollHadler(fn, retries, time, ...params)
    } else {
      throw err
    }
  }
}

export function poll<
  P extends unknown[],
  T extends (...args: P) => Promise<void> | void,
>(fn: T, retries = Infinity, time = 1000, ...params: P): NodeJS.Timer {
  const interval = setInterval(async () => {
    try {
      await pollHadler(fn, retries, time, ...params)
    } catch (err) {
      clearInterval(interval)
      throw err
    }
  }, time)

  return interval
}
