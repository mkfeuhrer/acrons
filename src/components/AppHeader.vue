<template>
  <div class="header">
    <div>
      <div class="logo">
        <img style="margin-right: 5px;" src="../assets/logo.png" width="60" height="60" alt />
        <h1>Acrons</h1>
        <router-link to="/" class="routes">English</router-link>|
        <router-link to="/id" class="routes">Bahasa</router-link>
      </div>
      <div class="subheading">
        <p>
          One stop solution for finding acronyms.
          <br />Now understand what these abbrevations stand for
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding-top: 1rem;
}

.header div h1 {
  font-size: 52px;
  font-weight: bolder;
}

.subheading {
  margin-top: 10px;
}

.subheading p {
  font-size: 20px;
  font-weight: normal;
}

.logo {
  align-self: center;
}

.routes {
  margin: 0 5px;
  font-weight: bold;
  font-size: 18px;
  color: #666;
  border-bottom: 3px solid #fcc047;
}

.routes:hover {
  margin: 0 5px;
  font-weight: bold;
  font-size: 18px;
  color: #fcc047;
  text-decoration: none;
  border-bottom: 3px solid #333;
}
</style>