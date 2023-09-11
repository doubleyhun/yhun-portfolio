<script setup>
const drawer = ref(null)
const nevKey = ref(null)

onBeforeMount(() => {
  console.log('test')
})

watch(nevKey, (newNevKey, oldNevKey) => {
  console.log(newNevKey, oldNevKey)
})

watch(drawer, (newDrawer, oldDrawer) => {
  console.log(newDrawer, oldDrawer)
})

const links = [
  ['mdi-account-question', 'Profile'],
  ['mdi-history', 'History'],
  ['mdi-link-box-variant', 'Link'],
]
</script>

<template>
  <v-navigation-drawer
      permanent
      v-model="drawer">
    <v-sheet
        color="grey-lighten-4"
        class="pa-4"
    >
      <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
      ></v-avatar>
      <div>양영훈</div>
      <div>FE Develpoer</div>
      <div>doubleyhun@gmail.com</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
          v-model="nevKey"
          v-for="[icon, text] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          @click=""
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>