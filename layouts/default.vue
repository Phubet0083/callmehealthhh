<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" permanent>
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          @click="navigateTo(item.to)"
          :prepend-icon="item.icon"
          :title="item.title"
          :color="item.color"
        />
      </v-list>
    </v-navigation-drawer>
    

    <v-app-bar elevation="0" class="border">
      <v-container class="d-flex justify-space-between">
        <div><v-img src="/images/logo.png" :width="100" :height="40"></v-img></div>
        
        <div>
          <v-btn
            v-if="!$vuetify.display.mobile"
            v-for="link in navItems"
            :key="link.title"
            :color="link.color"
            variant="text"
            @click="navigateTo(link.to)"
          >
            {{ link.title }}
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation v-model="value" v-if="$vuetify.display.mobile" color="teal" grow>
      <v-btn
        v-for="navigation in navItems"
        :key="navigation.title"
        @click="navigateTo(navigation.to)"
      >
        <v-icon :icon="navigation.icon"></v-icon>
        {{ navigation.title }}
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    value: 1,
    navItems: [
      {
        title: "Home",
        icon: "mdi-home",
        to: "/",
      },
      {
        title: "Meal",
        icon: "mdi-food",
        to: "/meal",
      },
      {
        title: "Packages",
        icon: "mdi-package",
        to: "/packages",
      },
      {
        title: "Login",
        icon: "mdi-login",
        to: "/login",
        color: "green"
      },
    ],
  }),
  methods: {
    navigateTo(page) {
      this.$router.push(page);
    },
  },
};
</script>