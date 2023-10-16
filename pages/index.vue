<script setup>
import {useDisplay} from "vuetify"

const {mobile} = useDisplay()
const yhun = ref('/yhun.png')
const mainContainerWidth = ref('960px')
const IntroDesc = ref(
    '안녕하세요 양영훈입니다.\n' +
    '\n' +
    '10년차 FE 개발자입니다.\n' +
    '데이터의 시각화, 직관적이고 편리한 UI 개발을 통해 사용자 친화적인 UX 결과물을 도출하여 비즈니스에 기여하는 일을 최고의 목표로 삼습니다.'
)
const experienceDesc = ref(
    '스타트업에서 6년동안 B2B, B2C 웹서비스를 기획/개발/배포/운영 하였습니다. 수기 계약으로 API를 발급해 주는 사업을 계정 및 APIKEY 발급부터, 선불결제, 자동결제기능까지 제공하는 웹 서비스를 기획자 및 Backend 개발자와 머리를 맞대어 단독(FE)으로 진행해 본 경험이 있습니다.\n' +
    '\n' +
    '네트워크 보안 전문 기업에서 4년동안 데이터 모니터링 및 장비 설정 기능을 웹으로 개발/배포/운영 하였습니다. 주로 데이터 시각화에 노력을 기울였으며 엔터프라이즈급 및 국가 보안시설에 납품하여 유지보수한 경험이 있습니다.\n' +
    '\n' +
    '비효율적인 업무를 줄이고 자동화 하는데 즐거움을 느낍니다. 각 서비스에 제공되는 ‘개인정보처리방침’을 하나의 사이트에서 관리하고 include 하여 사용할 수 있도록 제공하는 등 단순 반복 업무들을 자동화하는 백오피스를 개발하여 운영인원들의 업무효율 증대에 기여했습니다.'
)

onBeforeMount(() => {
  if (mobile.value)
    mainContainerWidth.value = '100%'
})

watch(mobile, (afterMobile, beforeMobile) => {
  if (afterMobile)
    mainContainerWidth.value = '100%'
  else
    mainContainerWidth.value = '960px'
})
</script>
<template>
  <div class="mx-auto" :style="{ width: mainContainerWidth}" >
    <v-row>
      <v-col cols="12" md="6" class="text-center">
        <div class="mx-auto" style="width: 300px">
          <v-avatar :image="yhun" size="250"></v-avatar>
          <div class="text-left mb-6">
            <div class="my-6 text-h5">Contact</div>
            <div>Phone. 010-9936-0470</div>
            <div>Email. doubleyhun@gmail.com</div>
            <div>Github. <a href="https://github.com/doubleyhun" target="_blank">https://github.com/doubleyhun</a></div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-h5">Intro</div>
        <v-textarea
            class="pt-0 mb-6"
            hide-details
            no-resize
            readonly
            variant="plain"
            auto-grow
            v-model="IntroDesc"
        ></v-textarea>
        <v-divider></v-divider>
        <div class="text-h5 mt-6">experience</div>
        <v-textarea
            class="pt-0 mb-6"
            hide-details
            no-resize
            readonly
            variant="plain"
            auto-grow
            v-model="experienceDesc"
        ></v-textarea>
        <v-divider></v-divider>
        <div class="text-h5 mb-6"></div>
        <div class="text-h5 my-6">Biography</div>
        <div class="mb-6">
          <v-row>
            <v-col cols="4">
              <div>2017.01 ~ 2023.11</div>
            </v-col>
            <v-col cols="8">
              <div>써머스플랫폼 스윗트래커CIC UXD팀 FE 개발자</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <div>2012.08 ~ 2016.11</div>
            </v-col>
            <v-col cols="8">
              <div>오픈베이스 기업 부설 연구소 소속 FE 개발자</div>
            </v-col>
          </v-row>
        </div>
        <v-divider></v-divider>
        <div class="text-h5 my-6">Skills</div>
        <v-row class="mb-6">
          <v-col cols="12" md="6">
            <v-alert
                class="my-2"
                border="start"
                variant="tonal"
                color="#FFD600"
                theme="dark"
                icon="mdi-language-javascript"
                prominent
                title="Javascript"
            >
            </v-alert>
            <v-alert
                class="my-2"
                border="start"
                variant="tonal"
                color="#81C784"
                theme="dark"
                icon="mdi-vuejs"
                prominent
                title="Vue"
            >
            </v-alert>
            <v-alert
                class="my-2"
                border="start"
                variant="tonal"
                color="#41B883"
                theme="dark"
                icon="mdi-nuxt"
                prominent
                title="Nuxt"
            >
            </v-alert>
          </v-col>
          <v-col cols="12" md="6">
            <v-alert
                class="my-2"
                border="start"
                variant="tonal"
                color="blue"
                theme="dark"
                icon="$vuetify"
                prominent
                title="Vuetify"
            >
            </v-alert>
            <v-alert
                class="my-2"
                border="start"
                variant="tonal"
                color="#f14a29"
                theme="dark"
                icon="mdi-language-html5"
                prominent
                title="HTML/CSS"
            >
            </v-alert>
            <v-alert
                class="my-2"
                border="start"
                variant="tonal"
                color="#BF4080"
                theme="dark"
                icon="mdi-sass"
                prominent
                title="SASS"
            >
            </v-alert>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <div class="text-h5 my-6">Education</div>
        <div class="mb-6">
          <v-row>
            <v-col cols="4">
              <div>2006.03 ~ 2012.08</div>
            </v-col>
            <v-col cols="8">
              <div>한남대학교 멀티미디어 공학, 미디어영상학 학사</div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
