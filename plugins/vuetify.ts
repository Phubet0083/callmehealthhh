// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import { md3 } from 'vuetify/blueprints'


import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
