<template>
  <div id="app">
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  name: "App",
  meta: [
    {
      name: "keywords",
      content: "acrons, acron, acronymns, short form, long form, abbrevations"
    },
    {
      name: "description",
      content: "One stop solution for finding the acronyms"
    },
    { name: "subject", content: "One stop solution for finding acronyms" },
    { name: "author", content: "@mkfeuhrer" },
    { name: "url", content: "https://mohitkhare.me/acrons" },
    { name: "og:title", content: "Acrons" },
    { name: "og:site_name", content: "Acrons" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://mohitkhare.me/acrons" },
    {
      name: "og:description",
      content:
        "One stop solution for finding acronyms.Now understand what these abbrevations stand for!"
    }
  ]
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
