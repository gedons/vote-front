<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold mb-6 text-center">Register</h1>

      <form @submit.prevent="register">
        <div v-if="loading" class="flex items-center justify-center mb-4">
          <svg class="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6h-2zm4.293-3.293a1 1 0 00-1.414 1.414L9.586 12l-2.707 2.707a1 1 0 001.414 1.414L12 13.414l2.707 2.707a1 1 0 001.414-1.414L14.414 12l2.707-2.707a1 1 0 00-1.414-1.414L12 10.586 9.293 7.293z"></path>
          </svg>
        </div>

        <div v-else>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" v-model="name" id="name" required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" v-model="email" id="email" required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" v-model="password" id="password" required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div class="mb-6">
            <label for="profilePicture" class="block text-sm font-medium text-gray-700">Profile Picture:</label>
            <input type="file" @change="handleFileUpload" id="profilePicture"
              class="mt-1 block w-full text-sm text-gray-700 file:border file:border-gray-300 file:bg-white file:py-2 file:px-4 file:rounded-md file:text-indigo-700 file:font-medium hover:file:bg-gray-100" />
          </div>
          <router-link to="/login" class="font-semibold text-sm underline">Click to Login</router-link>
          <button type="submit"
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm mt-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Register</button>
          <p v-if="error" class="mt-4 text-red-500 text-center">{{ error }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      profilePicture: null,
      error: null,
      loading: false
    };
  },
  methods: {
    handleFileUpload(event) {
      this.profilePicture = event.target.files[0];
    },
    async register() {
      this.loading = true;
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('password', this.password);
      if (this.profilePicture) {
        formData.append('profilePicture', this.profilePicture);
      }

      try {
        const response = await fetch('https://vote-z5vc.onrender.com/api/auth/register', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Registration failed');
        }

        localStorage.setItem('token', data.token);
        this.$router.push('/dashboard');  
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
