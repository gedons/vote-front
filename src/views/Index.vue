<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-indigo-600 text-white py-16">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Welcome to the Voter Registration System</h1>
        <p class="text-lg md:text-xl mb-8">Easily manage and access your voter card with our simple and secure application.</p>
        <router-link to="/login" class="bg-white text-indigo-600 py-2 px-6 rounded-md font-semibold shadow-md hover:bg-gray-100">Get Started</router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-8">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Feature 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Register Easily</h3>
            <p class="text-gray-700">Create your voter card quickly and securely with our user-friendly registration process.</p>
          </div>
          <!-- Feature 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">View Your Card</h3>
            <p class="text-gray-700">Access and view your voter card details anytime, anywhere from your dashboard.</p>
          </div>
          <!-- Feature 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Print Your Card</h3>
            <p class="text-gray-700">Print your voter card directly from the application with a simple click.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-gray-200 py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-8">About Us</h2>
        <p class="text-lg md:text-xl mb-8">Our mission is to simplify the voter registration process and provide a seamless experience for accessing your voter information. We are committed to ensuring security, ease of use, and accessibility for all users.</p>
        <router-link to="/login" class="bg-indigo-600 text-white py-2 px-6 rounded-md font-semibold shadow-md hover:bg-indigo-700">Learn More</router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-indigo-600 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Voter Registration System. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
