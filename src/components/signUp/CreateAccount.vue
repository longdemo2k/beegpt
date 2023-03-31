<template>
  <div class="wrapper">
    <div class="create-account">
      <ImageTitle title="Create your account" />
      <select v-model="selectedCountry">
        <option><img src="" alt=""></option>
      </select>
      <select v-model="selectedMonth" @change="updateDays">
        <option v-for="(month, index) in months" :key="index" :value="index+1">{{month}}</option>
      </select>
      <select v-model="selectedDate">
        <option v-for="day in days" :key="day" :value="day">{{day}}</option>
      </select>
      <select v-model="selectedYear" @change="updateDays">
        <option v-for="year in years" :key="year" :value="year">{{year}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import ImageTitle from '../AuthComponents/ImageTitle.vue';

export default {
  data() {
    return {
      selectedCountry: null,
      selectedMonth: null,
      selectedDate: null,
      selectedYear: null,
      months: [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ],
      days: [],
      years: []
    };
  },
  components:{
    ImageTitle
  },
  methods: {
    updateDays() {
      if (this.selectedMonth && this.selectedYear) {
        const daysInMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
        this.days = Array.from({length: daysInMonth}, (_, i) => i + 1);
      }
    }
  },
  mounted() {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= currentYear - 100; i--) {
      years.push(i);
    }
    this.years = years;
  },
  watch: {
    selectedMonth() {
      this.updateDays();
    },
    selectedYear() {
      this.updateDays();
    }
  }
}
</script>
