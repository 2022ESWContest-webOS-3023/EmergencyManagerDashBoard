<template>
  <v-app id="inspire">
    <v-app-bar></v-app-bar>
    <v-navigation-drawer width="10%">
      <v-row>
        <v-col>
          <v-icon>mdi-domain</v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col align-self>
          <v-icon>mdi-domain</v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col align-self>
          <v-icon>mdi-domain</v-icon>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    routelist: [
      {
        name: "웹사이트 관리",
        link: "/website",
      },
      {
        name: "계정 관리",
        link: "/management",
      },
    ],
    selectedItem: 1,
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
};
</script>
