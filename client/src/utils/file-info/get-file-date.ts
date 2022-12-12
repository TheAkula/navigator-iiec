export const getDate = (date: number) => {
  const fileDate = new Date(date)
  let days: string | number = fileDate.getDate()

  if (days < 10) {
    days = '0' + days
  }
  let months: string | number = fileDate.getMonth() + 1

  if (months < 10) {
    months = '0' + months
  }
  const years = fileDate.getFullYear()
  let hours: string | number = fileDate.getHours()

  if (hours < 10) {
    hours = '0' + hours
  }
  let minutes: string | number = fileDate.getMinutes()

  if (minutes < 10) {
    minutes = '0' + minutes
  }

  return `${days}.${months}.${years} ${hours}:${minutes}`
}
