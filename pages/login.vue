
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="green" dark flat>
            <v-toolbar-title>{{ isLogin ? 'Login' : 'Register' }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="isLogin ? login() : register()">
              <v-text-field
                label="Username"
                name="username"
                prepend-icon="mdi-account"
                type="text"
                v-model="username"
              ></v-text-field>
              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
              ></v-text-field>
              <v-text-field
                v-if="!isLogin"
                label="Confirm Password"
                name="confirmPassword"
                prepend-icon="mdi-lock-check"
                type="password"
                v-model="confirmPassword"
              ></v-text-field>
            </v-form>
            <v-alert v-if="errorMessage" type="error" dense class="mt-3">
              {{ errorMessage }}
            </v-alert>
            <v-alert v-if="successMessage" type="success" dense class="mt-3">
              {{ successMessage }}
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="toggleForm" color="primary">
              {{ isLogin ? 'Account Register' : 'Login' }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="green" @click="isLogin ? login() : register()">
              {{ isLogin ? 'Login' : 'Register' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AuthPage',
  data() {
    return {
      isLogin: true,
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      successMessage: '',
    }
  },
  methods: {
    login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.username === this.username && u.password === this.password)

    if (user) {
      this.successMessage = 'Login successful'
      this.errorMessage = ''
      console.log('Login successful', this.username)
      
      // Redirect to the profile page
      this.$router.push('/profile')
    } else {
      this.errorMessage = 'Invalid username or password'
      this.successMessage = ''
    }
  },
    login() {
      // Retrieve users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      
      // Find user with matching username and password
      const user = users.find(u => u.username === this.username && u.password === this.password)
      
      if (user) {
        this.successMessage = 'Login successful'
        this.errorMessage = ''
        console.log('Login successful', this.username)
        // Here you would typically set some state to indicate the user is logged in
        // For example: this.$store.commit('setLoggedInUser', this.username)
      } else {
        this.errorMessage = 'Invalid username or password'
        this.successMessage = ''
      }
    },
    register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match'
        this.successMessage = ''
        return
      }
      
      // Retrieve existing users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      
      // Check if username already exists
      if (users.some(u => u.username === this.username)) {
        this.errorMessage = 'Username already exists'
        this.successMessage = ''
        return
      }
      
      // Add new user
      users.push({
        username: this.username,
        password: this.password
      })
      
      // Save updated users array back to localStorage
      localStorage.setItem('users', JSON.stringify(users))
      
      this.successMessage = 'Registration successful. You can now login.'
      this.errorMessage = ''
      console.log('Registration successful', this.username)
      this.isLogin = true // Switch to login view after successful registration
    },
    toggleForm() {
      this.isLogin = !this.isLogin
      this.username = ''
      this.password = ''
      this.confirmPassword = ''
      this.errorMessage = ''
      this.successMessage = ''
    }
  }
}
</script>