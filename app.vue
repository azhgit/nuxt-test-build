<template>
  <div>
    <Head>
      <Title>Test</Title>
      <Meta
        name="description"
        content=".................."
      />
      <Meta property="og:image" content="/assets/logo.png" />
      <Meta property="og:title" content="...................." />
      <Meta
        property="og:description"
        content="................"
      />
      <Link rel="icon" href="/assets/logo.png" />
    </Head>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// You might choose this based on an API call or logged-in status
const layout = "default";
</script>
