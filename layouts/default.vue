<template>
  <div>
    <v-app>
      <left-nav></left-nav>
      <v-container
          class="py-8 px-6 container-left-nav"
          fluid
      >
        <slot />
      </v-container>
    </v-app>
  </div>
</template>

<script setup>
import LeftNav from "~/components/nav/leftNav.vue";
</script>

