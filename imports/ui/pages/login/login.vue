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
import { mapActions } from 'vuex';

export default {
  name: "login",
  data() {
    return {
      model: {
        email: '',
        password: '',
      },

      schema: {
        fields: [{
          type: 'input',
          model: 'email',
          inputType: 'text',
          label: 'Your email',
          styleClasses: 'col-sm-12',
          required: true,
          validator: VueFormGenerator.validators.email,
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
          email: this.model.email,
          password: this.model.password,
        });

        if (response) {
          this.$toasted.show('Hola!');
        }
      } catch (e) {
        this.$toasted.show(e);
      }
    },
  },
};
</script>
