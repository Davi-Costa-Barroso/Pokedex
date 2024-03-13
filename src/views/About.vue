<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ $route.params.slug }}</h3>
  </div>
</template>
<script >

export default {
  name: 'AboutView',
}
</script>