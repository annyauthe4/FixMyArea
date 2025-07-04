<template>
  <nav
    class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300"
  >
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2" @click.prevent="handleLogoClick">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">FA</span>
            </div>
            <span class="font-bold text-xl text-gray-800">FixMyArea</span>
          </router-link>
        </div>

        <div class="hidden md:flex items-center space-x-4">
          <a
            href="#how-it-works"
            class="inline-flex items-center gap-1 text-gray-600 font-medium px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
            </svg>
            How It Works
          </a>
          <a
            href="#features"
            class="inline-flex items-center gap-1 text-gray-600 font-medium px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
            </svg>
            Features
          </a>
          <a
            href="#success-stories"
            class="inline-flex items-center gap-1 text-gray-600 font-medium px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Success Stories
          </a>
        </div>

        <div class="flex items-center space-x-4">
          <router-link
            to="/auth/login"
            class="inline-flex items-center gap-1 border-2 border-blue-900 text-blue-900 bg-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H3m0 0l4-4m-4 4l4 4" />
            </svg>
            Sign In
          </router-link>
          <router-link
            to="/dashboard"
            class="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-blue-900 px-6 py-2 rounded-full font-semibold shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200 border-0 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Get Started
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-600 hover:text-blue-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="showMobileMenu" class="md:hidden bg-white border-t">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#how-it-works"
            class="block px-3 py-2 rounded-full text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 inline-flex items-center gap-1"
          >
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
            </svg>
            How It Works
          </a>
          <a
            href="#features"
            class="block px-3 py-2 rounded-full text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 inline-flex items-center gap-1"
          >
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
            </svg>
            Features
          </a>
          <a
            href="#success-stories"
            class="block px-3 py-2 rounded-full text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 inline-flex items-center gap-1"
          >
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Success Stories
          </a>
          <div class="border-t pt-2">
            <router-link
              to="/auth/login"
              class="block px-3 py-2 rounded-full border-2 border-blue-900 text-blue-900 bg-white font-semibold shadow hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 inline-flex items-center gap-1"
            >
              <svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H3m0 0l4-4m-4 4l4 4"
                />
              </svg>
              Sign In
            </router-link>
            <router-link
              to="/dashboard"
              class="block px-3 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-blue-900 font-semibold shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200 border-0 focus:outline-none focus:ring-2 focus:ring-yellow-300 inline-flex items-center gap-1"
            >
              <svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const showMobileMenu = ref(false)
const router = useRouter()
const route = useRoute()

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const handleLogoClick = () => {
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}
</script>
