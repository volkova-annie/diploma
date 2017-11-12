/**
 * @param  {Date} date
 * @return {Object} {ru: '1 Января', en: 'January 1'}
 */
export function getDate(date) {
  const mm = date.getMonth()
  const months = {
    ru: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  }
  const day = date.getDate()
  return {
    ru: `${day} ${months.ru[mm]}`,
    en: `${months.en[mm]} ${day}`,
  }
}

/**
 * @param  {Date} date
 * @return {String} 23:59 or 11:59 PM
 */
export function getTime(date) {
  const time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  return time
}
