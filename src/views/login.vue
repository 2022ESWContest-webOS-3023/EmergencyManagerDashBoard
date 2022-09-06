<template>
  <v-row justify="space-around">
    <v-dialog v-model="dialog" overlay-opacity="0" persistent max-width="400">
      <v-card>
        <v-card-title class="text-h5"> 로그인 정보 </v-card-title>
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        >
        <v-card-actions>
          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
  
  <script>
export default {
  name: "HelloWorld",

  data: () => ({
    dialog: true,
  }),
};
</script>
  