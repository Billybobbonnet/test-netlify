<template>
  <header class="topnav h-54px p-2 border-b-2 border-gray-200">
    <div class="container mx-auto flex justify-between items-center">
      <div class="right flex justify-start items-center">
        <Logo class="w-8 h-8 mr-3" />
        <h1 class="text-lg font-bold text-gray-700">My blog</h1>
      </div>
      <div class="left self-end">
        <ul v-if="!isContentPage" class="flex lang-switch justify-around">
          <ul class="flex lang-switch justify-around">
            <li v-if="$i18n.locale !== 'en'">
              <nuxt-link class="text-md ..." :to="switchLocalePath('en')"
                >EN</nuxt-link
              >
            </li>
            <li v-if="$i18n.locale !== 'fr'">
              <nuxt-link class="text-md ..." :to="switchLocalePath('fr')"
                >FR</nuxt-link
              >
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  computed: {
    isContentPage() {
      return this.$route?.name.includes('slug')
    },
  },
}
</script>
