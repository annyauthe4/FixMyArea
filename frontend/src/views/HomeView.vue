<template>
  <section class="min-h-screen flex items-center justify-center bg-white py-12">
    <div class="max-w-2xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-blue-600 mb-6">
        FixMyArea
      </h1>
      <p class="mb-6 text-lg text-gray-700">
        Community-driven platform for reporting and tracking local infrastructure issues. 
        Empower your city. Make a difference.
      </p>
      <router-link to="/dashboard">
        <button class="px-6 py-3 rounded bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition">
          Get Started
        </button>
      </router-link>
    </div>
  </section>
</template>