<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section
      class="hero-section bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white"
    >
      <div class="container mx-auto px-6 py-20">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 lg:pr-12">
            <h1 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fix Your <span class="text-yellow-400">Community</span> Together
            </h1>
            <p class="text-xl mb-8 text-blue-100 leading-relaxed">
              FixMyArea empowers citizens to report local infrastructure problems directly to
              municipal agencies. From potholes to broken streetlights, make your voice heard and
              track real progress.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link
                to="/dashboard"
                class="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200 border-0 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Report an Issue
              </router-link>
              <button
                @click="scrollToHow"
                class="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 bg-white px-8 py-4 rounded-full font-semibold text-lg shadow hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 17l-4 4m0 0l-4-4m4 4V3"
                  />
                </svg>
                Learn How It Works
              </button>
            </div>
          </div>
          <div class="lg:w-1/2 mt-12 lg:mt-0">
            <div class="relative">
              <div
                class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500"
              >
                <div class="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span class="text-gray-500 text-lg">Demo Interface Preview</span>
                </div>
                <div class="space-y-3">
                  <div
                    class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block"
                  >
                    ✓ Issue Reported
                  </div>
                  <h3 class="text-gray-800 font-semibold">Pothole on Main Street</h3>
                  <p class="text-gray-600 text-sm">Status: Under Review by City Council</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section bg-white py-16">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="stat-item">
            <div class="text-4xl font-bold text-blue-600 mb-2">2,847</div>
            <div class="text-gray-600">Issues Reported</div>
          </div>
          <div class="stat-item">
            <div class="text-4xl font-bold text-green-600 mb-2">1,923</div>
            <div class="text-gray-600">Issues Resolved</div>
          </div>
          <div class="stat-item">
            <div class="text-4xl font-bold text-purple-600 mb-2">45</div>
            <div class="text-gray-600">Partner Agencies</div>
          </div>
          <div class="stat-item">
            <div class="text-4xl font-bold text-orange-600 mb-2">12,000+</div>
            <div class="text-gray-600">Active Citizens</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" ref="howItWorks" class="how-it-works bg-gray-50 py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">How FixMyArea Works</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple three-step process to report issues and drive positive change in your community
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="step text-center">
            <div
              class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white text-2xl font-bold">1</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Report the Issue</h3>
            <p class="text-gray-600 leading-relaxed">
              Snap a photo, pin the location on our interactive map, and describe the problem. Our
              system automatically categorizes and routes your report.
            </p>
          </div>

          <div class="step text-center">
            <div
              class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white text-2xl font-bold">2</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Agency Review</h3>
            <p class="text-gray-600 leading-relaxed">
              The relevant municipal department receives your report instantly. They assess the
              issue and provide timeline estimates for resolution.
            </p>
          </div>

          <div class="step text-center">
            <div
              class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white text-2xl font-bold">3</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Track Progress</h3>
            <p class="text-gray-600 leading-relaxed">
              Receive real-time updates on your report's status. See before and after photos when
              the issue is resolved and celebrate community improvements.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section bg-white py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
          <p class="text-xl text-gray-600">Everything you need to create meaningful change</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="feature-card bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Easy Reporting</h3>
            <p class="text-gray-600">
              Simple, intuitive interface for quick issue submission with photo upload and GPS
              location.
            </p>
          </div>

          <div
            class="feature-card bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Real-time Tracking</h3>
            <p class="text-gray-600">
              Monitor your reports from submission to completion with detailed status updates.
            </p>
          </div>

          <div
            class="feature-card bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Community Impact</h3>
            <p class="text-gray-600">
              See community-wide statistics and celebrate collective achievements in local
              improvements.
            </p>
          </div>

          <div
            class="feature-card bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Agency Dashboard</h3>
            <p class="text-gray-600">
              Dedicated portals for municipal agencies to efficiently manage and respond to citizen
              reports.
            </p>
          </div>

          <div
            class="feature-card bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Data Analytics</h3>
            <p class="text-gray-600">
              Comprehensive reporting and analytics to identify trends and prioritize community
              needs.
            </p>
          </div>

          <div
            class="feature-card bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Smart Notifications</h3>
            <p class="text-gray-600">
              Automatic updates via email and in-app notifications to keep you informed throughout
              the process.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories Section -->
    <section id="success-stories" class="success-stories bg-blue-50 py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p class="text-xl text-gray-600">Real impact from real community members</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="success-story bg-white rounded-xl p-8 shadow-lg">
            <div class="mb-6">
              <div class="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <span class="text-gray-500">Before Photo</span>
              </div>
              <div class="bg-green-100 rounded-lg h-48 flex items-center justify-center">
                <span class="text-green-700 font-semibold">After Photo</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Pothole Fixed on Elm Street</h3>
            <p class="text-gray-600 mb-4">Reported by Sarah M. • Resolved in 5 days</p>
            <p class="text-gray-700">
              "The dangerous pothole that was damaging cars for months was finally fixed thanks to
              FixMyArea. The city responded so quickly!"
            </p>
          </div>

          <div class="success-story bg-white rounded-xl p-8 shadow-lg">
            <div class="mb-6">
              <div class="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <span class="text-gray-500">Before Photo</span>
              </div>
              <div class="bg-green-100 rounded-lg h-48 flex items-center justify-center">
                <span class="text-green-700 font-semibold">After Photo</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Broken Streetlight Replaced</h3>
            <p class="text-gray-600 mb-4">Reported by Mike T. • Resolved in 3 days</p>
            <p class="text-gray-700">
              "Our neighborhood feels so much safer now that the streetlight is working again. Thank
              you FixMyArea for making it so easy to report!"
            </p>
          </div>

          <div class="success-story bg-white rounded-xl p-8 shadow-lg">
            <div class="mb-6">
              <div class="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <span class="text-gray-500">Before Photo</span>
              </div>
              <div class="bg-green-100 rounded-lg h-48 flex items-center justify-center">
                <span class="text-green-700 font-semibold">After Photo</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Park Cleanup Initiative</h3>
            <p class="text-gray-600 mb-4">Reported by Community Group • Resolved in 7 days</p>
            <p class="text-gray-700">
              "Multiple reports about our local park led to a complete cleanup and new equipment
              installation. Amazing community impact!"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Fix Your Area?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Join thousands of citizens making a real difference in their communities. Your report
          could be the catalyst for positive change.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/dashboard"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200 border-0 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Start Reporting Issues
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const howItWorks = ref(null)

const scrollToHow = () => {
  howItWorks.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.landing-page {
  overflow-x: hidden;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.stat-item {
  padding: 2rem 1rem;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.step {
  transition: transform 0.3s ease;
}

.step:hover {
  transform: translateY(-10px);
}

.feature-card {
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.success-story {
  transition: transform 0.3s ease;
}

.success-story:hover {
  transform: translateY(-5px);
}
</style>
