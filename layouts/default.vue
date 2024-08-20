<template>
  <el-container class="common-layout">
    <el-header class="bg-header">
      <AppHeader />
    </el-header>
    <el-scrollbar height="calc(100vh - 60px)">
      <el-main>
        <slot />
      </el-main>
      <!-- <el-footer>
        <AppFooter />
      </el-footer> -->
    </el-scrollbar>
  </el-container>
</template>

<script setup lang="ts"></script>

<style scoped></style>
