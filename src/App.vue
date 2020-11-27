<template>
  <div id="app" class="container">
    <div class="text-center">
      <router-link :to="{name: 'Home'}">
        <img alt="Vue-logo" src="@/assets/logo.png">
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>

