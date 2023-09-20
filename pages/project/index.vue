<script setup>
import {useDisplay} from "vuetify"

const {mobile} = useDisplay()
const timeLineDensity = ref('default')
const itmeWidth = ref(440)
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
    summaryDesc: [
      '트래픽 내 파일 및 메일 첨부파일의 악성여부를 필터링하고 모니터링 하는 대시보드 솔루션 개발',
      '대형 전광판부터 개인 PC 및 모바일까지 소화하는 반응형 개발을 위해 Bootstarp 커스터마이징',
      '웹 소켓을 이용하여 실시간 데이터 분석 현황판 구현',
      '기획 참여, FE 단독 개발 및 유지보수, 국가 정보기관 납품'
    ],
    taskDesc: '내가 맡은 업무',
    techDesc: 'Vue, Nuxt.js, AngularJs, Bootstrap, Jenkins'
  },
  {
    color: '#f44336',
    icon: 'mdi-angularjs',
    name: '악성파일 탐지 시스템',
    linkKey: false,
    summaryDesc: [
      '트래픽 내 파일 및 메일 첨부파일의 악성여부를 필터링하고 모니터링 하는 대시보드 솔루션 개발',
      '대형 전광판부터 개인 PC 및 모바일까지 소화하는 반응형 개발을 위해 Bootstarp 커스터마이징',
      '웹 소켓을 이용하여 실시간 데이터 분석 현황판 구현',
      '기획 참여, FE 단독 개발 및 유지보수, 국가 정보기관 납품'
    ],
    taskDesc: '데이터 시각화, 반응형, 실시간 데이터',
    techDesc: 'AngularJs, Bootstrap'
  },
  {
    color: '#f44336',
    icon: 'mdi-angularjs',
    name: 'LogK',
    linkKey: false,
    summaryDesc: [
      '첫 단독 FE 프로젝트로 개발 효율성을 위해 AngularJs 제안 후 도입',
      '획일적이고 효율적인 웹 디자인을 위해 Material 기반의 디자인 가이드 작성, 사내 FE팀(디자이너포함) 교육 진행',
      '대용량 Log파일을 분석, 검색 하기 위해 ELK(현 Elastic)도입 Kibana 대시보드 커스터마이징 개발 담당',
    ],
    taskDesc: 'Kibana 커스터마이징, 대용량 Log 시각화, material design 가이드',
    techDesc: 'ELK(현 Elastic), AngularJs'
  },
  {
    color: '#0769AD',
    icon: 'mdi-jquery',
    name: 'ADCsmart',
    linkKey: false,
    summaryDesc: [
      'Jquery, FreeMarker를 기반으로 다기종 L4, L7을 통합 관리, 모니터링하는 솔루션을 개발',
      '신규 개발 참여부터 2차례의 리뉴얼을 주도적으로 진행하면서 다소 딱딱한 L4, L7 스위치의 UI/UX를 트렌디하고 편리한 UI/UX로 제공',
      '모니터링 모듈들을 한 페이지에 카드 형식으로 배치하고 저장하여 사용할 수 있는 커스터마이징 대시보드를 서드파티 없이 단독 개발 세일링 포인트에 적극 활용',
      '수출형 모델을 위해 다국어 모듈 및 빌드 작업.'
    ],
    taskDesc: '리뉴얼, 커스터마이징 대시보드 개발, amChart 리팩토링, 국가별 다국어 빌드, 데이터 시각화',
    techDesc: 'Jquery, FreeMarker'
  }
])
const linkPage = (linkURL) => {
  window.open(linkURL, '_blank')
}

onMounted(() => {
  if (mobile.value) {
    timeLineDensity.value = 'compact'
    itmeWidth.value = 310
  }
})

watch(mobile, (afterMobile, beforeMobile) => {
  if (afterMobile) {
    timeLineDensity.value = 'compact'
    itmeWidth.value = 310
  }
  else {
    timeLineDensity.value = 'default'
    itmeWidth.value = 440
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
              <div
                  class="mb-2 display-flex"
                  v-for="summaryDesc in item.summaryDesc">
                <div>•</div>
                <div>{{ summaryDesc }}</div>
              </div>
              <div class="text-h6 mt-4">Task keyword</div>
              <v-textarea
                  hide-details
                  no-resize
                  readonly
                  variant="plain"
                  auto-grow
                  rows="1"
                  v-model="item.taskDesc"
              >
              </v-textarea>
              <div class="text-h6 mt-4">Tech</div>
              <v-textarea
                  hide-details
                  no-resize
                  readonly
                  variant="plain"
                  auto-grow
                  rows="1"
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