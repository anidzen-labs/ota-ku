<template>
  <v-app-bar app flat>
    <v-container class="d-flex py-0 px-2 fill-height ota-ku-container">

      <div class="mr-5 d-flex align-center">
        <NuxtLink to="/" class="d-flex w-[40px]">
            <img src="/ota-ku.png" alt="ota-ku">
        </NuxtLink>
      </div>

      <div class="d-flex gap-2 align-center hidden-sm-and-down" v-if="!mobile">
        <v-btn
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :prepend-icon="item.icon"

            :variant="getButtonVariant(item.path)"
            :color="getButtonColor(item.path)"
            class="text-body-2"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-spacer />

      <div>
        <v-btn
            icon
            variant="text"
            color="medium-emphasis"
            @click="toggleTheme"
        >
          <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>

  <v-bottom-navigation
      v-if="mobile"
      app
      grow
      color="primary"
      class="elevation-4 md:d-none"
  >
    <v-btn
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
    >
      <v-icon>{{ item.icon }}</v-icon>
      <span>{{ item.title }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
const theme = useTheme();
const route = useRoute();

const isDark = computed(() => theme.global.current.value.dark);

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark';
};

const { mobile } = useDisplay();

const navItems = [
  {
    title: 'Каталог',
    path: '/catalog',
    icon: 'mdi-view-grid-outline'
  },
];

const getButtonVariant = (path: string): 'tonal' | 'text' => {
  return route.path.startsWith(path) ? 'tonal' : 'text';
};

const getButtonColor = (path: string): 'primary' | 'medium-emphasis' => {
  return route.path.startsWith(path) ? 'primary' : 'medium-emphasis';
};

</script>

<style scoped>

.gap-2 {
  gap: 8px;
}
</style>