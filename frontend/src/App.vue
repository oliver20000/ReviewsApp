<template>
  <div id="app">
    <header class="header">
      <div class="logo">Reviews</div>
    </header>
    <div class="app-container">
      <router-view />
    </div>
  </div>
</template>


<script>
export default {
  name: 'App',
};
</script>


<style>

body {
  font-family: Arial, sans-serif;
  background-color: #f4f7f9;
  margin: 0;
  color: #333;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  background-color: #3498db;
  padding: 15px;
  color: white;
  text-align: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.content {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>