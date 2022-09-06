<template>
  <v-app id="inspire">
    <v-system-bar app height="80px" color="indigo">
      <v-spacer></v-spacer>
      <v-icon size="30" color="white" @click="toMain">mdi-account</v-icon>
      <v-icon size="30" color="white" @click="toDrone">mdi-logout</v-icon>
      <v-icon size="30" color="white" @click="toUser"
        >mdi-information-outline</v-icon
      >
      <v-spacer></v-spacer>
    </v-system-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  methods: {
    toMain() {
      this.$router.push("/main");
    },
    toDrone() {
      this.$router.push("/drone");
    },
    toUser() {
      this.$router.push("/user");
    },
  },
};
</script>
