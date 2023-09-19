<script setup>
const tabKey = ref(null)
</script>

<template>
  <v-tabs
      v-model="tabKey"
      color="grey"
      align-tabs="center"
      class="my-10"
  >
    <v-tab to="/" class="text-h6 px-10">Profile</v-tab>
    <v-tab to="/project" class="text-h6 px-10">Project</v-tab>
    <v-tab to="/vue3test" class="text-h6 px-10">Link</v-tab>
  </v-tabs>
</template>