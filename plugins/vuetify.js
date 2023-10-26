import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import {md3} from "vuetify/blueprints"

export default defineNuxtPlugin((NuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        blueprint: md3,
        display: {
            mobileBreakpoint: 'md'  //	( md === 960px > < 1280px )
        },
    })
    NuxtApp.vueApp.use(vuetify)
})
