<script setup>
  const age = ref(17)
  const canVote = computed(() => {
      return age.value >= 18 ? '가능' : '불가능'
  })
  const canVoteFunction = () => {
    return age.value >= 18 ? '가능' : '불가능'
  }
  const testFunction = () => {
    let test = 'test123'
    return test
  }
  watch(age, (newAge, oldAge) => {
    console.log(newAge, oldAge)
  })
</script>

<template>
  <div>사용자 정보</div>
  <ul>
    <li>나이: {{ age }}</li>
    <li>투표가 가능한가요?: {{ age >= 18? '가능' : '불가능' }}</li>
    <li>투표가 가능한가요?: {{ canVote }}</li>
    <li>투표가 가능한가요?: {{ canVoteFunction() }}</li>
  </ul>
  <div>{{ testFunction }}</div>
  <v-btn @click="age--">나이 -</v-btn>
  <v-btn @click="age++">나이 +</v-btn>
</template>

<style scoped>

</style>