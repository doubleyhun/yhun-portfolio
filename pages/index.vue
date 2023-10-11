<script setup>
import LeftNav from "~/components/nav/leftNav.vue";

const cards = ['포트폴리오 1', '포트폴리오 2']
const mainContainerStyle = ref()
</script>
<template>
  <div :style="mainContainerStyle" class="mx-auto">
  <v-row>
    <v-col cols="12" md="6" class="text-center">ddd</v-col>
    <v-col cols="12" md="6">
      <div class="text-h5 mb-6">About</div>
      <div class="text-h6">간단한 어필 소개소개소개</div>
        <div class="mb-4">예시 내용 예시 내용 예시 내용 예시 내용 예시 내용 예시 내용 예시 내용  </div>
      <v-divider></v-divider>
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
        <v-row>
          <v-col cols="4">
            <div>2012.08</div>
          </v-col>
          <v-col cols="8">
            <div>한남대학교 멀티미디어 공학, 미디어영상학 학사</div>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <div class="text-h5 my-6">Skills</div>
      <v-row>
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
    </v-col>
  </v-row>
  </div>
</template>