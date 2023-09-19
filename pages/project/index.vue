<script setup>
import {useDisplay} from "vuetify"

const {mobile} = useDisplay()
const timeLineDensity = ref('default')
const itmeWidth = ref(380)
const items = ref([
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '비즈엠',
    linkKey: true,
    linkURL: 'http://dev-bizm-renewal.bizmsg.kr/',
    summaryDesc: '프로젝트 간략 설명',
    taskDesc: '내가 맡은 업무',
    techDesc: 'Vue(Nuxt.js), Vuetify, SASS, Jenkins, Babel, ESLint',
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '스MART',
    linkKey: true,
    linkURL: 'http://14.129.18.228/',
    summaryDesc: '프로젝트 간략 설명',
    taskDesc: '내가 맡은 업무',
    techDesc: 'Vue, Nuxt.js, Vuetify, SASS, Jenkins, Babel, ESLint'
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '스윗트래커 공식 페이지',
    linkKey: true,
    linkURL: 'http://www.sweettracker.co.kr/',
    summaryDesc: '프로젝트 간략 설명',
    taskDesc: '내가 맡은 업무',
    techDesc: 'Vue, Nuxt.js, Vuetify, SASS, Jenkins'
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '11번가 배송조회 추적 관리',
    linkKey: true,
    linkURL: 'http://11st-admin.sweettracker.net/',
    summaryDesc: '프로젝트 간략 설명',
    taskDesc: '내가 맡은 업무',
    techDesc: 'Vue, Nuxt.js, Vuetify, SASS, Jenkins'
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '스마트택배 API',
    linkKey: true,
    linkURL: 'https://tracking.sweettracker.co.kr/',
    summaryDesc: '프로젝트 간략 설명',
    taskDesc: '내가 맡은 업무',
    techDesc: 'Vue, Nuxt.js, AngularJs, Bootstrap, Jenkins'
  },
  {
    color: '#f44336',
    icon: 'mdi-angularjs',
    name: '악성 파일 및 메일 탐지 시스템',
    linkKey: false,
    summaryDesc: '프로젝트 간략 설명',
    taskDesc: '내가 맡은 업무',
    techDesc: 'AngularJs, Bootstrap'
  },
  {
    color: '#f44336',
    icon: 'mdi-angularjs',
    name: 'LogK',
    linkKey: false,
    summaryDesc: '프로젝트 간략 설명',
    taskDesc: '내가 맡은 업무',
    techDesc: 'ELK(Elastic), AngularJs'
  },
  {
    color: '#0769AD',
    icon: 'mdi-jquery',
    name: 'ADCsmart',
    linkKey: false,
    summaryDesc: '프로젝트 간략 설명',
    taskDesc: '내가 맡은 업무',
    techDesc: 'Jquery, FreeMarker'
  }
])
const linkPage = (linkURL) => {
  window.open(linkURL, '_blank')
}

onMounted(() => {
  if (mobile.value) {
    timeLineDensity.value = 'compact'
    itmeWidth.value = 300
  }
})
</script>

<template>
  <v-row>
    <div class="mx-auto">
      <v-timeline
          :density="timeLineDensity"
          truncate-line="end"
          align="center">
        <v-timeline-item
            :width="itmeWidth"
            v-for="(item, i) in items"
            :key="i"
            :dot-color="item.color"
            size="default"
            :icon="item.icon"
            icon-color="#ffffff"
        >
          <v-card class="bg-white">
            <v-card-title>
              <div>{{ item.name }}</div>
            </v-card-title>
            <v-card-text class="bg-white text--primarym mt-4">
              <div>GIF 들어갈 공간</div>
              <div class="text-h6 mt-4">Summary</div>
              <v-textarea
                  hide-details
                  no-resize
                  readonly
                  variant="plain"
                  rows="2"
                  v-model="item.summaryDesc"
              >
              </v-textarea>
              <div class="text-h6 mt-4">Task</div>
              <v-textarea
                  hide-details
                  no-resize
                  readonly
                  variant="plain"
                  rows="2"
                  v-model="item.taskDesc"
              >
              </v-textarea>
              <div class="text-h6 mt-4">TECH</div>
              <v-textarea
                  hide-details
                  no-resize
                  readonly
                  variant="plain"
                  rows="2"
                  v-model="item.techDesc"
              >
              </v-textarea>
              <v-btn
                  v-if="item.linkKey"
                  icon="mdi-link"
                  class="my-4"
                  color="grey"
                  variant="outlined"
                  density="comfortable"
                  @click="linkPage(item.linkURL)"
              >

              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-row>
</template>

<style scoped>

</style>