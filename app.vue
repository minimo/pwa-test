<script setup>

const onClick = () => {
  document.documentElement.requestFullscreen()
}

</script>

<template>
  <div>
    2024-12-20-3
    <button @click="onClick">
      フルスクリーン
    </button>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
