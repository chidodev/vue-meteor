<template lang="pug">
b-col.offset-md-3(col md="6")
  b-card
    b-form
      vue-form-generator(:model="model"
                        :schema="schema"
                        :options="formOptions")
      b-button(variant="primary"
              @click="submitForm()") Login
      b-link(to="recover-password") Forgot your password?
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import { mapActions } from 'vuex-alt';

export default {
  name: "login",
  data() {
    return {
      model: {
        username: '',
        password: '',
      },

      schema: {
        fields: [{
          type: 'input',
          model: 'username',
          inputType: 'text',
          label: 'Your username',
          styleClasses: 'col-sm-12',
          required: true,
          validator: VueFormGenerator.validators.string,
        }, {
          type: 'input',
          model: 'password',
          inputType: 'password',
          label: 'Password',
          styleClasses: 'col-sm-12',
          required: true,
          validator: VueFormGenerator.validators.string,
        }],
      },

      formOptions: {
        validateAfterChanged: true,
      },
    };
  },
  methods: {
    ...mapActions({
      loginUser: actions => actions.accounts.loginUser,
    }),
    async submitForm() {
      try {
        const response = await this.loginUser({
          username: this.model.username,
          password: this.model.password,
        });

        // if (response) {
        //   this.$toasted.show('Hola!');
        // }
      } catch (e) {
        console.log('error occured: ', e)
        //this.$toasted.show(e);
      }
    },
  },
};
</script>
