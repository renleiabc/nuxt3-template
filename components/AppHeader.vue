<template>
  <div class="text-wi flex h-full items-center justify-between">
    <NuxtLink to="/">
      <img src="~/assets/images/logo.jpg" width="100px" />
    </NuxtLink>
    <div class="header-search w-p20">
      <el-input v-model="search" placeholder="" :suffix-icon="Search" class="bg-search rounded-3xl" />
    </div>
    <div class="flex items-center">
      <div class="mr-5" style="display: none">
        <ClientOnly>
          <el-switch
            v-model="colorMode"
            inline-prompt
            active-text="dark"
            inactive-text="light"
            size="large"
          ></el-switch>
        </ClientOnly>
      </div>
      <div style="width: 150px">
        <el-select v-model="locale" placeholder="Select" @change="changeLang">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
const search = ref('');

const color = useColorMode();
const colorMode = computed({
  get: () => color.value === 'dark',
  set: () => (color.preference = color.value === 'dark' ? 'light' : 'dark')
});
const { locale, locales, setLocale } = useI18n();
console.log('🚀 ~ locales:', locales.value);
const route = useRoute();
// setLocale('en');
const options = [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'zh-cn',
    label: '中文'
  }
];

// 语言切换跳转页面
const localeRoute = useLocaleRoute();
const changeLang = (lang: string) => {
  console.log('🚀 ~ changeLang ~ lang:', lang);
  setLocale(lang);
  // 用于把当前页面生成对应的语言前缀的路由,例如:/zh/,/zh/about
  const routePath = localeRoute({ path: route.fullPath, query: { ...route.query } });
  console.log('🚀 ~ changeLang ~ routePath:', routePath);
  if (routePath) {
    return navigateTo(routePath.fullPath); // 路由跳转
  }
};
</script>

<style scoped></style>
