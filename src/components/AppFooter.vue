<template>
  <div class="footer">
    <div class="socialShare">
      <span class="socialIcons">
        <a
          href="https://twitter.com/intent/tweet?url=https://mohitkhare.me/acrons&text=Find the most used acronyms.Check out Acrons by @mkfeuhrer"
          target="_blank"
        >
          <i style="color: #38A1F3" class="fab fa-2x fa-twitter" aria-hidden="true"></i>
        </a>
      </span>

      <span class="socialIcons">
        <a href="https://www.facebook.com/sharer/sharer.php?u=mohitkhare.me/acrons" target="_blank">
          <i class="fab fa-2x fa-facebook-f" aria-hidden="true" target="_blank"></i>
        </a>
      </span>
      <span class="socialIcons">
        <a
          target="_blank"
          style="color: #0e76a8;"
          href="https://www.linkedin.com/shareArticle?mini=true&url=https://mohitkhare.me/acrons"
          onclick="window.open(this.href, 'width=550,height=435');return false;"
        >
          <i class="fab fa-2x fa-linkedin-in" aria-hidden="true"></i>
        </a>
      </span>
    </div>
    <p>
      Made with
      <i class="fas fa-heart heartIcon"></i> by
      <a href="https://mohitkhare.me" target="blank">Mohit</a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.heartIcon {
  color: red;
}

a {
  font-weight: bold;
}

.footer {
  font-size: 1em;
  padding: 0.7em;
}

.socialIcons {
  padding: 1em;
  font-size: 0.85em;
}

.socialShare {
  margin: 1em;
}
</style>