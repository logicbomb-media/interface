const dayjs = require('dayjs')

export default {
  methods: {
    formatDate(date) {
      return dayjs(date).format('YYYY-MM-DD')
    },
  },
}
