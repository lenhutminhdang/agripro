import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);
  const isAdmin = ref(false);
  const user = ref(null);

  function login(userData) {
    isLoggedIn.value = true;
    user.value = userData;
    if (userData) {
      isAdmin.value = userData.role === "admin";
    }
  }

  function logout() {
    isLoggedIn.value = false;
    user.value = null;
    isAdmin.value = false;
  }

  return {
    isLoggedIn,
    isAdmin,
    user,
    login,
    logout,
  };
});
