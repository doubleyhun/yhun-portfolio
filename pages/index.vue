<script setup>
import LeftNav from "~/components/nav/leftNav.vue";

const cards = ['포트폴리오 1', '포트폴리오 2']
</script>
<template>
  <v-row>
    <v-col cols="6" class="text-center">ddd</v-col>
    <v-col cols="6">
      <div class="text-h4 mb-6">About</div>
      <div class="text-h6">간단한 어필 소개소개소개</div>
        <div class="mb-4">예시 내용 예시 내용 예시 내용 예시 내용 예시 내용 예시 내용 예시 내용  </div>
      <v-divider></v-divider>
      <div class="text-h4 my-6">Biography</div>
      <div class="mb-6">
        <v-row>
          <v-col cols="2">
            <div>2017.01 ~ 2023.11</div>
          </v-col>
          <v-col cols="7">
            <div>써머스플랫폼 스윗트래커CIC UXD팀 FE 개발자</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <div>2012.08 ~ 2016.11</div>
          </v-col>
          <v-col cols="7">
            <div>오픈베이스 기업 부설 연구소 소속 FE 개발자</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <div>2012.08</div>
          </v-col>
          <v-col cols="7">
            <div>한남대학교 멀티미디어 공학, 미디어영상학 학사</div>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <div class="text-h4 my-6">Skills</div>
      <v-row>
        <v-col cols="6">
          <v-alert
              class="my-2"
              border="start"
              variant="tonal"
              color="#42b883"
              theme="dark"
              icon="$vuetify"
              prominent
              title="Vue"
          >
          </v-alert>
          <v-alert
              class="my-2"
              border="start"
              variant="tonal"
              color="#00dc82"
              theme="dark"
              icon="$vuetify"
              prominent
              title="Nuxt"
          >
          </v-alert>
        </v-col>
        <v-col cols="6">
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
        </v-col>
      </v-row>





    </v-col>
  </v-row>
</template>