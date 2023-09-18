<script setup>
const cards = ['포트폴리오 1', '포트폴리오 2']
const items = ref([
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '비즈엠',
    linkKey: true,
    linkURL: 'http://dev-bizm-renewal.bizmsg.kr/'
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '스MART',
    linkKey: true,
    linkURL: 'http://14.129.18.228/'
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '스윗트래커 공식 페이지',
    linkKey: true,
    linkURL: 'http://www.sweettracker.co.kr/'
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '11번가 배송조회 추적 관리',
    linkKey: true,
    linkURL: 'http://11st-admin.sweettracker.net/'
  },
  {
    color: '#41B883',
    icon: 'mdi-nuxt',
    name: '스마트택배 API',
    linkKey: true,
    linkURL: 'https://tracking.sweettracker.co.kr/'
  },
  {
    color: '#f44336',
    icon: 'mdi-angularjs',
    name: '악성 파일 및 메일 탐지 시스템',
    linkKey: false
  },
  {
    color: '#f44336',
    icon: 'mdi-angularjs',
    name: 'LogK',
    linkKey: false
  },
  {
    color: '#0769AD',
    icon: 'mdi-jquery',
    name: 'ADC Smart',
    linkKey: false
  },
])
const linkPage = (linkURL) => {
  window.open(linkURL, '_blank')
}
</script>

<template>
  <v-row>
    <div style="width: 800px" class="mx-auto">
      <v-timeline align="center">
        <v-timeline-item
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
              <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
                convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
                salutandi sententiae.</p>
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