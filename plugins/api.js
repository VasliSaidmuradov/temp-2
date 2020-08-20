export default function ({ $axios, store, app }, inject) {
  inject('api', {
    cache: {},
    baseURL: process.env.NODE_ENV === 'development' ? 'https://admin.cashu.kz/api' : 'https://admin.cashu.kz/api',

    async get(url, data = {}, error = 'default') {
      app.$setError(error, null)

      let key = this.getCacheKey(url, data)
      // console.log(':: ', key)
      if (this.getFromCache(key)) {
        return this.getFromCache(key)
      }

      data['_method'] = 'GET'

      try {
        const resp = await $axios.$post(url.includes('://') ? url : (this.baseURL + url), data)

        if (process.client) this.setCacheKey(key, resp)
        return resp
      } catch (e) {
        app.$setError(error, e)
        return null
      }
    },

    async post(url, data = {}, error) {
      data['_method'] = 'POST'
      return await this.sendRequest(url, data.error)
    },

    async put(url, data = {}, error = 'default') {
      data['_method'] = 'PUT'
      return await this.sendRequest(url, data, error)
    },

    async sendRequest(url, data, error) {
      app.$setError(error, null)

      try {
        const resp = await $axios.$post(url.includes('://') ? url : (this.baseURL + url), data)
        return resp
      } catch (e) {
        app.$setError(error, e.response.data)
        return null
      }
    },

    getCacheKey(url, data) {
      let key = url
      for (let k in data) {
        key += (JSON.stringify(data[k]).split('\"').join(''))
      }
      return key
    },

    getFromCache(key) {
      return this.cache[key]
    },

    setCacheKey(key, data) {
      this.cache[key] = data
    }
  })
}
