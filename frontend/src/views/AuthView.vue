<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <div class="mb-8">
      <button @click="mode = 'login'" :class="modeBtn('login')">Login</button>
      <button @click="mode = 'signup'" :class="modeBtn('signup')">Sign Up</button>
      <button @click="mode = 'reset'" :class="modeBtn('reset')">Reset Password</button>
    </div>
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import ResetPasswordForm from '@/components/auth/ResetPasswordForm.vue'

const mode = ref('login')

const currentComponent = computed(() => {
  if (mode.value === 'signup') return RegisterForm
  if (mode.value === 'reset') return ResetPasswordForm
  return LoginForm
})

const modeBtn = (val) =>
  [
    'px-6 py-2 rounded-full font-semibold mx-2 transition-all',
    mode.value === val
      ? 'bg-blue-600 text-white shadow-lg scale-105'
      : 'bg-white text-blue-700 border border-blue-600 hover:bg-blue-50',
  ].join(' ')
</script>
