<template>
  <footer>
    <p>
      Copyright® {{ new Date().getFullYear() }} — <strong>PWA Test 3</strong>
    </p>
    <p>
      Version <strong>{{ version }}</strong> - {{ nodeEnv }} - {{ baseUrl }}
    </p>
  </footer>
</template>

<script>
import settings from '@/settings'

export default {
  data: () => ({
    baseUrl: settings.baseUrl,
    version: settings.version,
    nodeEnv: settings.nodeEnv,
  }),
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 20px;
  background-color: #545454;
  color: white;
}
</style>
