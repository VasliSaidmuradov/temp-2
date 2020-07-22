import moment from 'moment'

export default function({ app, store }, inject) {
  moment.locale('ru')

  inject('chunk', (array = [], chunkSize = 3) => {
    let arr = [], i = 0
    for (; i < array.length; i += chunkSize) {
      arr.push(array.slice(i, i + chunkSize))
    }
    return arr
  })

  inject('formatDate', (value, format = 'D MMMM YYYY') => {
    return moment(value).format(format)
  })

  inject('formatMoney', (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  })

  inject('parseString', (str = '') => {
    return !str ? [] : JSON.parse(str);
  })

  inject('imageLink', (link) => {
    const url = 'http://demo-10.brandstudio.kz/';
    return `${url}${link}`;
  })
}
