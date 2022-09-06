<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" overlay-opacity="0" persistent max-width="500">
      <v-card>
        <v-card-title> 로그인 정보 </v-card-title>
        <v-card-text>
          <v-row class="d-flex justify-center align-center">
            <v-col cols="3">
              <v-subheader class="d-flex justify-center align-center"
                >아이디</v-subheader
              >
            </v-col>
            <v-col cols="8">
              <v-text-field></v-text-field>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center align-center">
            <v-col cols="3">
              <v-subheader class="d-flex justify-center align-center"
                >비밀번호</v-subheader
              >
            </v-col>
            <v-col cols="8">
              <v-text-field>비밀번호 암호화 작업 필요</v-text-field>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center align-center">
            <v-checkbox v-model="checkbox" :label="'아이디 저장'"></v-checkbox>
            <router-link to="/findIdPw">아이디/비밀번호 찾기</router-link>
          </v-row>
          <v-row class="d-flex justify-center align-center">
            <v-btn color="green darken-1" text @click="dialog = false">
              로그인 하기
            </v-btn>
          </v-row>
          <v-row class="d-flex justify-center align-center">
            <router-link to="/signup">회원가입</router-link>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
  
  <script>
export default {
  name: "HelloWorld",

  data: () => ({
    dialog: true,
    checkbox: false,
  }),
};
</script>
  