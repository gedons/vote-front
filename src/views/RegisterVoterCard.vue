<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center">Create Voter Card</h2>
      <form @submit.prevent="createVoterCard" class="space-y-4">
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700">Address:</label>
          <input type="text" v-model="address" required class="w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth:</label>
          <input type="date" v-model="dob" required class="w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label for="voterId" class="block text-sm font-medium text-gray-700">Voter ID:</label>
          <input type="text" v-model="voterId" required class="w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" class="w-full p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      address: '',
      dob: '',
      voterId: ''
    };
  },
  methods: {
    async createVoterCard() {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.post('http://localhost:5000/api/voter-cards', {
          address: this.address,
          dob: this.dob,
          voterId: this.voterId
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        alert('Voter card created successfully!');
        this.$router.push('/dashboard');
      } catch (error) {
        console.error(error);
        alert('Failed to create voter card.');
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
