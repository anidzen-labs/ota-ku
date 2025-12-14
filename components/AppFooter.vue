<script setup lang="ts">
const contacts = {
  email: 'w33bv.gl@gmail.com',
};

const menuGroups = [
  {
    title: 'Навигация',
    items: [
      { text: 'Главная', link: '/' },
      { text: 'Каталог', link: '/catalog' },
    ]
  },
  {
    title: 'Об авторе',
    items: [
      { text: 'Anidzen Labs', link: 'https://t.me/AnidzenLabs', external: true },
      { text: 'Vahe Sargsyan', link: 'https://vahe.anidzen.com', external: true },
    ]
  },
  {
    title: 'Документы',
    items: [
      { text: 'Политика конфиденциальности', link: '/doc/privacy-policy' },
      { text: 'Пользовательское соглашение', link: '/doc/terms' },
      { text: 'Правообладателям', link: '/doc/authors' },
    ]
  },
];
</script>

<template>
  <v-footer>
    <v-container class="ota-ku-container px-2">
      <v-row>
        <v-col cols="12" md="6" lg="6" class="pr-lg-8">
          <NuxtLink to="/" class="d-flex align-center text-decoration-none mb-2">
            <img src="/ota-ku.png" class="w-12 mr-3" alt="">
            <div class="text-h5 font-weight-bold text-primary">OTA-KU</div>
          </NuxtLink>

          <div class="text-caption text-medium-emphasis mb-2 text-justify">
            <p class="font-weight-bold mb-1">Отказ от ответственности (Дисклеймер):</p>
            <p>Весь контент на сайте предназначен исключительно для личного ознакомления. Мы используем материалы из свободных источников. Если какой-то контент нарушает ваши авторские права, пожалуйста, свяжитесь с нами, и мы незамедлительно удалим его. Однако мы не можем гарантировать, что он не будет загружен на сайт снова другими пользователями. Копирование материала с сайта разрешено только после получения разрешения администрации.</p>
          </div>

          <v-chip
              color="red-darken-1"
              size="small"
              label
          >
            Сайт предназначен для лиц старше 16+ лет.
          </v-chip>

        </v-col>

        <v-col cols="12" md="6" lg="6">
          <v-row class="justify-end">
            <v-col
                v-for="group in menuGroups"
                :key="group.title"
                cols="6"
                sm="4"
                md="4"
                lg="4" class="text-sm-right" >
              <div class="text-subtitle-1 font-weight-bold mb-4 text-high-emphasis">
                {{ group.title }}
              </div>

              <div class="d-flex flex-column text-body-2 align-sm-end">
                <a
                    v-for="item in group.items"
                    :key="item.text"
                    :href="item.link"
                    :target="item.external ? '_blank' : '_self'"
                    class="text-medium-emphasis text-decoration-none mb-2 hover-link"
                >
                  {{ item.text }}
                </a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="my-5"/>

      <div class="d-flex items-center justify-space-between">
        <div class="text-center text-caption text-medium-emphasis">
          &copy; {{ new Date().getFullYear() - 3 }}-{{ new Date().getFullYear() }} OTA-KU. Все права защищены.
        </div>
        <div class="text-caption text-caption text-medium-emphasis">
          Сайт сделан Anidzen ⚡ для OTA-KU
        </div>
      </div>
    </v-container>
  </v-footer>
</template>


<style scoped>
.max-w-screen-xl {
  max-width: 1280px !important;
  margin: 0 auto;
}

.hover-link {
  transition: color 0.2s ease;
}

.hover-link:hover {
  color: var(--v-theme-primary) !important;
}
</style>