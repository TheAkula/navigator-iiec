export const getSize = (size: number) => {
  const sizes = ['Б', 'КБ', 'МБ', 'ГБ']
  let quantity = 0

  const divide = (num: number): number => {
    const newNumber = num / 1024

    if (Math.round(newNumber) > 0) {
      quantity += 1

      return newNumber >= 1024 && quantity !== 3
        ? divide(newNumber)
        : Math.round(newNumber)
    }

    return num
  }

  const num = divide(size)

  return num + ' ' + sizes[quantity]
}
