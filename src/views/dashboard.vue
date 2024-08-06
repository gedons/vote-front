<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h1 class="text-3xl font-bold mb-6 text-center">Welcome to the Voter Registration System</h1>
      <p class="text-lg text-gray-700 mb-6 text-center">Manage your voter registration and access your voter card easily.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div class="bg-gray-200 p-6 rounded-lg shadow-inner text-center">
          <h2 class="text-xl font-bold mb-4">View Card</h2>
          <p class="text-gray-700 mb-4">View your voter card.</p>
          <router-link to="/view-voter-card"
            class="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">View Card</router-link>
        </div>
        <div v-if="!hasVoterCard" class="bg-gray-200 p-6 rounded-lg shadow-inner text-center">
          <h2 class="text-xl font-bold mb-4">Create Voter Card</h2>
          <p class="text-gray-700 mb-4">Create and access your voter card.</p>
          <router-link to="/register-voter-card"
            class="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Create Voter Card</router-link>
        </div>
      </div>

      <button @click="logout"
        class="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      hasVoterCard: false,
    };
  },
  async created() {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://vote-z5vc.onrender.com/api/voter-cards', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.data) {
        this.hasVoterCard = true;
      }
    } catch (error) {
      console.error(error);
      this.hasVoterCard = false;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
