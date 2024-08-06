<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="max-w-md w-full bg-white p-6 rounded-lg shadow-md voter-card">
            <router-link to="/dashboard"  class="text-blue-500 hover:underline">Go Back</router-link>
        <h2 class="text-2xl font-bold text-center mb-4">My Voter Card</h2>
        <div v-if="voterCard" class="space-y-4">
            <div>
            <img :src="voterCard.user.profilePicture" alt="Profile Picture" class="w-32 h-32  rounded-full mx-auto" v-if="voterCard.user.profilePicture" />
            </div>
            <div>
            <p class="text-center"><strong>Name:</strong> {{ voterCard.user.name }}</p>
            <p class="text-center"><strong>Email:</strong> {{ voterCard.user.email }}</p>
            </div>
            <div class="border-t border-gray-200 mt-4"></div>
            <div>
            <p><strong>Address:</strong> {{ voterCard.address }}</p>
            <p><strong>Date of Birth:</strong> {{ formatDate(voterCard.dob) }}</p>
            <p><strong>Voter ID:</strong> {{ voterCard.voterId }}</p>
            </div>
            <button @click="printCard" class="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                Print Card
            </button>
        </div>
        <div v-else class="text-center">
            <p>No voter card found.</p>
        </div>
        </div>
    </div>
    </template>

  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        voterCard: null
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
        this.voterCard = response.data.data;
      } catch (error) {
        console.error(error);
        alert('Failed to fetch voter card.');
      }
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
      printCard() {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print Voter Card</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write('<h2>My Voter Card</h2>');
        printWindow.document.write('<div>');
        if (this.voterCard.user.profilePicture) {
            printWindow.document.write('<img src="' + this.voterCard.user.profilePicture + '" style="width: 100px; height: 100px; border-radius: 50%;" />');
        }
        printWindow.document.write('<p><strong>Name:</strong> ' + this.voterCard.user.name + '</p>');
        printWindow.document.write('<p><strong>Email:</strong> ' + this.voterCard.user.email + '</p>');
        printWindow.document.write('<p><strong>Address:</strong> ' + this.voterCard.address + '</p>');
        printWindow.document.write('<p><strong>Date of Birth:</strong> ' + this.formatDate(this.voterCard.dob) + '</p>');
        printWindow.document.write('<p><strong>Voter ID:</strong> ' + this.voterCard.voterId + '</p>');
        printWindow.document.write('</div>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    }
    }
  };
  </script>
  
  <style scoped>
  .voter-card {
    
    padding: 2rem;
  }
  
  .voter-card img {
    /* Increase image size */
    width: 32px; /* Adjust height automatically based on aspect ratio */
    object-fit: cover; /* Crop image to fit container */
  }
  
  </style>
  