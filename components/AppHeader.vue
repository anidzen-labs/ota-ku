<template>
   <div class="block md:hidden">
     <v-bottom-navigation tag="nav" elevation="4" class="pa-1 d-flex ga-2 hidden" grow
                          style="backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);"
                          color="surface">
       <v-btn disabled :loading="loading.schedule" value="recent" width="120px" rounded="xl"
              @click="openBottomNavigationRoute('schedule')">
         <v-icon>mdi-history</v-icon>
         <span>Сегодня</span>
       </v-btn>
       <v-spacer></v-spacer>
       <v-btn :loading="loading.catalog" value="catalog" rounded="xl" width="120px"
              color="blue"
              to="/catalog"
              @click="openBottomNavigationRoute('catalog')"
       >
         <v-icon>mdi-movie-filter</v-icon>
         <span>Каталог</span>
       </v-btn>
       <v-spacer></v-spacer>
       <v-btn disabled :loading="loading.releases" value="releases" width="120px" rounded="xl"
              @click="openBottomNavigationRoute('releases')">
         <v-icon>mdi-filmstrip-box-multiple</v-icon>
         <span>Библиотека</span>
       </v-btn>
     </v-bottom-navigation>
   </div>
  <header class="sticky top-0 bg-neutral-200 dark:bg-neutral-950 z-[1000] dark:shadow-lg dark:shadow-neutral-950">
    <div class="container max-w-screen-xl mx-auto px-2 py-4 flex justify-between items-center">
      <div class="left flex items-center gap-4">
        <div class="logo w-[130px] lg:w-[150px]">
          <NuxtLink to="/">
            <UiAppLogo/>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="/catalog">Каталог</NuxtLink>
        </div>
      </div>
<!--      <div class="right">-->
<!--        ww-->
<!--      </div>-->
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import {useTheme} from 'vuetify';
import {openBottomNavigationRoute} from "~/ts/goTo";

export default defineComponent({
  name: "PrimaryHeader",

  data() {
    return {
      openBottomNavigationRoute,
      loading: reactive({
        schedule: false,
        catalog: false,
        releases: false
      }),
    };
  },
  setup() {
    const theme = useTheme();

    const changeTheme = () => {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    };

    return {
      changeTheme
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    getButtonVariant(route: string) {
      return this.$route.path === route ? 'tonal' : 'text';
    }
  }
});
</script>