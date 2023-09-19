<script setup>
const tabKey = ref(null)
</script>

<template>
  <v-tabs
      color="#0769AD"
      v-model="tabKey"
      align-tabs="center"
      class="my-10"
  >
    <v-tab to="/" class="text-h6 px-7">Profile</v-tab>
    <v-tab to="/project" class="text-h6 px-7">Project</v-tab>
    <v-tab to="/vue3test" class="text-h6 px-7">Link</v-tab>
  </v-tabs>
</template>