<script setup>
import { computed, ref, watchEffect } from "vue";
import TotalRevenueProfitCards from "../components/report/TotalRevenueProfitCards.vue";
import BarChart from "../components/chart/BarChart.vue";
import TopSellingProducts from "../components/report/TopSellingProducts.vue";
import TopCustomers from "../components/report/TopCustomers.vue";

const currentYear = new Date().getFullYear();
const barChartYear = ref(currentYear);
const years = computed(() => {
  return Array.from({ length: currentYear - 2022 }, (_, i) => currentYear - i);
});
</script>

<template>
  <main class="text-gray-700">
    <h1 class="text-3xl text-center mb-10">Thống Kê</h1>
    <TotalRevenueProfitCards />

    <!-- Biểu đồ -->
    <BarChart :year="barChartYear" />
    <select
      name="year"
      v-model="barChartYear"
      placeholder="Chọn năm"
      class="mb-5 bg-yellow-100 py-3 px-4 text-gray-800 placeholder:text-gray-600 outline-none focus:outline-yellow-400 rounded-md"
    >
      <option disabled value="">chọn năm</option>
      <option v-for="year in years" :key="year" :value="year">
        {{ year }}
      </option>
    </select>

    <div class="flex flex-wrap justify-between">
      <TopSellingProducts />

      <TopCustomers />
    </div>
  </main>
</template>
