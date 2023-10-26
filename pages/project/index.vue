<script setup>
import {useDisplay} from 'vuetify'

const {mobile} = useDisplay()
const timeLineDensity = ref('default')
const itmeWidth = ref(440)
const dialogKey = ref(false)
const dialogImgUrl = ref('')
const dialogTitle = ref('')
const items = ref([
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '비즈엠',
    dateRange: '2021 ~ 2023',
    linkKey: true,
    linkURL: 'http://dev-bizm-renewal.bizmsg.kr/',
    summaryDesc: [
      '카카오톡 알림톡, 친구톡 공식 딜러 서비스 `비즈엠` 리뉴얼 작업 진행',
      'Django기반에서 Vue(Nuxt.js)기반으로 FE 리뉴얼',
      '알림톡 템플릿 등록부터 발송까지 모든단계를 step화 하여 사용성 개선',
      '사용자의 액션에 따라 실제 카카오톡 처럼 미리보기 기능을 제공하여 서비스 경쟁력 강화',
    ],
    taskDesc: '리뉴얼, 알림톡, 친구톡, 템플릿대시보드, 결제',
    techDesc: 'Vue(Nuxt.js), Vuetify, SASS, Jenkins, Babel, ESLint',
    imgKey: true,
    imgList: [
      '/bizm/bizm1.png',
      '/bizm/bizm2.png',
      '/bizm/bizm3.png',
      '/bizm/bizm4.png',
      '/bizm/bizm5.png',
      '/bizm/bizm6.png',
    ],
    selectImg: '/bizm/bizm1.png'
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '스MART',
    dateRange: '2019',
    linkKey: true,
    linkURL: 'http://14.129.18.228/',
    summaryDesc: [
      '마트 상품 최저가 검색 비교 솔루션',
      '카테고리, 필터별 상품 상세 검색 및 장바구니 기능 구현',
      '스마트택배 앱 내 웹앱으로 기능 추가(현재 미운영)',
      'Vuetify 기반 모바일 디자인 가이드 작성 사내 디자인 시스템 재정립으로 생산성 증대',
    ],
    taskDesc: '쇼핑몰, 최저가 검색, 반응형, 웹앱, 디자인 가이드',
    techDesc: 'Vue, Nuxt.js, Vuetify, SASS, Jenkins, Babel, ESLint',
    imgKey: true,
    imgList: [
      '/smart/smart1.png',
      '/smart/smart2.png',
      '/smart/smart3.png',
      '/smart/smart4.png',
      '/smart/smart5.png',
      '/smart/smart6.png',
    ],
    selectImg: '/smart/smart1.png'
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '스윗트래커 공식 페이지',
    dateRange: '2018',
    linkKey: true,
    linkURL: 'http://www.sweettracker.co.kr/',
    summaryDesc: [
      '사내 서비스 통합 안내 페이지 제작',
      'fullPage.js 도입으로 심플하고 가독성있는 페이지 디자인',
      '사내 서비스 이용약관 및 개인정보 처리방침 통합 페이지 제작으로 갱신때마다 생기는 공수 줄임',
      '기존 간편 배송 조회 기능이 크롤링에 취약하여 결과 페이지를 이미지로 출력 보안 강화'
    ],
    taskDesc: '통합 페이지, 반응형, 크롤링방어',
    techDesc: 'Vue, Nuxt.js, Vuetify, SASS, Jenkins',
    imgKey: true,
    imgList: [
      '/homepage/homepage1.png',
      '/homepage/homepage2.png',
      '/homepage/homepage3.png',
      '/homepage/homepage4.png',
      '/homepage/homepage5.png',
      '/homepage/homepage6.png',
    ],
    selectImg: '/homepage/homepage1.png'
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '11번가 배송조회 추적 관리',
    dateRange: '2017',
    linkKey: true,
    linkURL: 'http://11st-admin.sweettracker.net/',
    summaryDesc: [
      '대형 고객들의 니즈를 충족하기 위해 대시보드 위주의 관리 페이지 제작',
      '생산성 증대를 위해 Nuxt.js 도입',
      '다른 고객의 니즈가 있을때마다 커스터마이징이 가능하도록 모듈화 설계',
      '사내 백오피스 방향 제시 및 제작으로 운영팀 업무 과다 해소',
    ],
    taskDesc: '백오피스, 대시보드, 데이터 시각화, 모듈화',
    techDesc: 'Vue, Nuxt.js, Vuetify, SASS, Jenkins',
    imgKey: true,
    imgList: [
      '/11st/11st1.png',
      '/11st/11st2.png',
      '/11st/11st3.png',
      '/11st/11st4.png',
      '/11st/11st5.png',
      '/11st/11st6.png',
    ],
    selectImg: '/11st/11st1.png'
  },
  {
    color: '#41B883',
    icon: 'mdi-vuejs',
    name: '스마트택배 API',
    dateRange: '2016 ~ 2017',
    linkKey: true,
    linkURL: 'https://tracking.sweettracker.co.kr/',
    summaryDesc: [
      '스윗트래커 첫 FE 개발자로 입사하여 단독으로 진행한 프로젝트',
      '후불 및 수기 계약으로 제공했던 사내 배송조회 API 서비스를 웹으로 자동화(APIKEY 발급) 현재 연 매출 약 7억',
      '선불 및 자동결제 시스템 도입(PG사 연동)',
      'AngularJs 기반 개발에서 Vue기반으로 리뉴얼 진행중 (현재 랜딩페이지만 완료)'
    ],
    taskDesc: 'UI기획, APIKEY관리, 서비스 자동화, 자동결제, 리뉴얼',
    techDesc: 'Vue, AngularJs, Bootstrap, Jenkins',
    imgKey: true,
    imgList: [
      '/smartapi/smartapi1.png',
      '/smartapi/smartapi2.png',
      '/smartapi/smartapi3.png',
      '/smartapi/smartapi4.png',
      '/smartapi/smartapi5.png',
      '/smartapi/smartapi6.png',
    ],
    selectImg: '/smartapi/smartapi1.png',
  },
  {
    color: '#f44336',
    icon: 'mdi-angularjs',
    name: '악성파일 탐지 시스템',
    dateRange: '2015 ~ 2016',
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
    dateRange: '2014',
    linkKey: false,
    summaryDesc: [
      '첫 단독 FE 프로젝트로 개발 효율성을 위해 AngularJs 제안 후 도입',
      '일관성 있고 효율적인 디자인을 위해 Material 기반의 디자인 가이드 작성, 사내 FE팀(디자이너포함) 교육 진행',
      '대용량 Log파일을 분석, 검색 하기 위해 ELK(현 Elastic)도입 Kibana 대시보드 커스터마이징 개발 담당',
    ],
    taskDesc: 'Kibana 커스터마이징, 대용량 Log 시각화, 디자인시스템 개선',
    techDesc: 'ELK(현 Elastic), AngularJs'
  },
  {
    color: '#0769AD',
    icon: 'mdi-jquery',
    name: 'ADCsmart',
    dateRange: '2012 ~ 2014',
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

const changeImg = (object, imgUrl) => {
  object.selectImg = imgUrl
}

const openImgDialog = (imgUrl) => {
  dialogKey.value = true
  dialogImgUrl.value = imgUrl
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
  } else {
    timeLineDensity.value = 'default'
    itmeWidth.value = 440
  }
})
</script>

<template>
  <template>
    <v-dialog
        v-model="dialogKey"
        width="1280"
    >
      <v-card>
        <v-img :src="dialogImgUrl"></v-img>
        <v-card-actions class="justify-end">
          <v-btn color="blue"
                 @click="dialogKey = false">닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  <v-row>
    <div class="mx-auto">
      <v-timeline
          side="end"
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
          <template v-slot:opposite>
            <div class="mb-6">
              <v-hover
                  v-slot="{ isHovering, props }">
                <v-card
                    :elevation="isHovering ? 5 : 2"
                    :class="{ 'on-hover': isHovering }"
                    v-bind="props"
                >
                  <v-img
                      :width="450"
                      v-if="item.imgKey"
                      :src="item.selectImg">
                    <div
                        class="pa-2 text-right">
                      <v-btn
                          rounded="lg"
                          color="white"
                          prepend-icon="mdi-open-in-new"
                          @click="openImgDialog(item.selectImg)"
                      >
                        <template v-slot:prepend>
                          <v-icon color="blue"></v-icon>
                        </template>
                        크게 보기
                      </v-btn>
                    </div>

                  </v-img>
                </v-card>
              </v-hover>
            </div>
            <v-sheet
                max-width="450"
            >
              <v-slide-group
                  show-arrows
              >
                <v-slide-group-item
                    v-for="(img, i) in item.imgList"
                    :key="i"
                >
                  <v-card
                      elevation="2"
                      class="ml-7"
                  >
                    <v-img
                        class="cursor-pointer"
                        :src="img"
                        width="150px"
                        cover
                        @click="changeImg(item, img)"
                    ></v-img>
                  </v-card>
                </v-slide-group-item>
              </v-slide-group>
            </v-sheet>
<!--            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
              <template v-for="(img, i) in item.imgList"
                        :key="i">
                <v-col
                    class="pb-0"
                    cols="4"
                >
                  <v-hover
                      v-slot="{ isHovering, props }">
                    <v-card
                        :elevation="isHovering ? 5 : 2"
                        :class="{ 'on-hover': isHovering }"
                        v-bind="props"
                    >
                      <v-img
                          class="cursor-pointer"
                          :src="img"
                          height="80px"
                          cover
                          @click="changeImg(item, img)"
                      ></v-img>
                    </v-card>
                  </v-hover>
                </v-col>
              </template>
            </v-row>-->
          </template>
          <v-card class="bg-white my-10">
            <v-card-title class="pa-4">
              <div class="text-h5 font-bold">{{ item.name }}</div>
            </v-card-title>
            <v-card-text class="bg-white text--primarym">
              <div>{{ item.dateRange }}</div>
              <div class="text-h6 mt-5 mb-2">Summary</div>
              <div
                  class="mb-2 display-flex"
                  v-for="summaryDesc in item.summaryDesc">
                <div>•</div>
                <div>{{ summaryDesc }}</div>
              </div>
              <div class="text-h6 mt-5 mb-2">Task keyword</div>
              <div>{{ item.taskDesc }}</div>
              <div class="text-h6 mt-5 mb-2">Tech</div>
              <div>{{ item.techDesc }}</div>
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
