<template>
  <div id="app">
    <el-config-provider :locale="lang">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import en from 'element-plus/es/locale/lang/en';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
const { locale, setLocale } = useI18n();
console.log('🚀 ~ locale:', locale.value);
setLocale('en');
const seoMate = {
  title: appTitle,
  ogTitle: appTitle,
  description: appDescription,
  ogDescription: appDescription,
  ogImage: './assets/images/logo-big.png',
  twitterCard: 'summary_large_image'
} as any;
useSeoMeta(seoMate);
const lang = computed(() => {
  let obj = en as any;
  switch (locale.value) {
    case 'en':
      obj = en;
      break;
    case 'zh-cn':
      obj = zhCn;
      break;
    default:
      obj = en;
      break;
  }
  return obj;
});
</script>
