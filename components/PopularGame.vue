<template>
  <template v-if="data">
    <div class="flex flex-wrap justify-between">
      <div v-for="item in first" :key="item.id" :span="6" class="w-p18">
        <NuxtLink :to="`/details/${item.id}`" class="aspect-square">
          <img :src="item.coverImg" class="aspect-square rounded-3xl" />
        </NuxtLink>
      </div>
      <div class="flex aspect-square w-p18 flex-wrap content-between">
        <div v-for="item in third" :key="item.id" :span="6" class="w-full" style="height: 45%">
          <NuxtLink :to="`/details/${item.id}`" class="block h-full">
            <img :src="item.coverImg" class="h-full w-full rounded-3xl" />
          </NuxtLink>
        </div>
      </div>
      <div v-for="item in third" :key="item.id" :span="6" class="w-p18">
        <NuxtLink :to="`/details/${item.id}`" class="aspect-square">
          <img :src="item.coverImg" class="aspect-square rounded-3xl" />
        </NuxtLink>
      </div>
    </div>
  </template>
  <template v-else>
    <div></div>
  </template>
</template>

<script setup lang="ts">
const data = await handlePopularGame('/independent/GameInfo/selectHotGame');
console.log('🚀 ~ file: PopularGame.vue:18 ~ data:', data);
const first = data?.slice(2, 4);
console.log('🚀 ~ file: PopularGame.vue:19 ~ first:', first);
const second = data?.slice(4, 6);
console.log('🚀 ~ file: PopularGame.vue:21 ~ second:', second);
const third = data?.slice(6, 8);
console.log('🚀 ~ file: PopularGame.vue:23 ~ third:', third);
console.log('🚀 ~ file: PopularGame.vue:25~ data:', data);
</script>

<style scoped></style>
