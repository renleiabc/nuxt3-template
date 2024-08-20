<template>
  <div>casdas</div>
</template>

<script setup lang="ts">
const hotGame = await getFetchData({
  url: '/independent/GameInfo/selectHotGame'
});
console.log(hotGame);
</script>

<style scoped></style>
