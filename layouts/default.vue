<template>
  <div>
    <v-app>
      <top-nav></top-nav>
      <v-container
          class="py-8 mx-auto"
          fluid
      >
        <slot />
      </v-container>
    </v-app>
  </div>
</template>

<script setup>
import TopNav from "~/components/nav/topNav.vue";
</script>

