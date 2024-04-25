<template>
  <div id="app">
    <div class="container">
      <h2>Age Group Analysis</h2>
      <form @submit.prevent="updateChart" class="form">
        <div class="form-group">
          <label for="under12">Under 12</label>
          <input
            type="number"
            id="under12"
            v-model="under12"
            class="input-field"
          />
        </div>
        <div class="form-group">
          <label for="age1217">Age 12-17</label>
          <input
            type="number"
            id="age1217"
            v-model="age1217"
            class="input-field"
          />
        </div>
        <div class="form-group">
          <label for="age1829">Age 18-29</label>
          <input
            type="number"
            id="age1829"
            v-model="age1829"
            class="input-field"
          />
        </div>
        <div class="form-group">
          <label for="above29">Above 29</label>
          <input
            type="number"
            id="above29"
            v-model="above29"
            class="input-field"
          />
        </div>
        <button type="submit" class="submit-button">Analyse</button>
      </form>
    </div>
    <div class="chart-container" v-if="showSuggestions">
      <div class="chart-wrapper">
        <h2 class="chart-title">Age Group Distribution Chart</h2>
        <apexchart
          v-if="chartData"
          type="pie"
          width="380"
          :options="chartOptions"
          :series="chartData.series"
        ></apexchart>
      </div>
      <div class="suggestions-wrapper">
        <h2 class="chart-title">Suggestions for Merchandise</h2>

        <apexchart
          v-if="suggestionsChartOptions"
          :options="suggestionsChartOptions"
          :series="suggestionsChartSeries"
          type="bar"
          width="380"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      under12: 0,
      age1217: 0, // represents age group 12 to 17
      age1829: 0, // represents age group 18 to 29
      above29: 0,
      chartData: null,
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
          toolbar: {
            show: false,
          },
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
        },
        labels: ["Under 12", "Age 12-17", "Age 18-29", "Above 29"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
                height: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      suggestions: [],
      showSuggestions: false,
    };
  },
  computed: {
    suggestionsChartOptions() {
      return {
        chart: {
          width: 380,
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["Kid-friendly", "Trendy", "Fashionable", "Premium"],
          labels: {
            style: {
              fontSize: "14px",
            },
          },
        },
        colors: ["#008FFB", "#00E396", "#FF4560", "#FEB019"],
        title: {
          text: "Merchandise Suggestions",
          align: "center",
          style: {
            color: "#fff",
          },
        },
        yaxis: {
          title: {
            text: "Number of People",
            style: {
              color: "#fff",
            },
          },
          labels: {
            style: {
              colors: "#fff",
            },
          },
        },
        tooltip: {
          theme: "dark",
          x: { show: true },
        },
        grid: {
          borderColor: "#636363",
        },
      };
    },
    suggestionsChartSeries() {
      const seriesData = [];
      if (this.under12 >= 5) {
        seriesData.push(this.under12);
      } else {
        seriesData.push(0);
      }
      if (this.age1217 >= 5) {
        seriesData.push(this.age1217);
      } else {
        seriesData.push(0);
      }
      if (this.age1829 >= 5) {
        seriesData.push(this.age1829);
      } else {
        seriesData.push(0);
      }
      if (this.above29 >= 5) {
        seriesData.push(this.above29);
      } else {
        seriesData.push(0);
      }
      return [
        {
          data: seriesData,
        },
      ];
    },
  },
  methods: {
    updateChart() {
      this.chartData = {
        series: [this.under12, this.age1217, this.age1829, this.above29],
        labels: ["Under 12", "Age 12-17", "Age 18-29", "Above 29"],
      };

      this.generateSuggestions();

      this.showSuggestions = true;
    },
    generateSuggestions() {     // cool to be implemented further using AI for later use
      this.suggestions = [];

      if (this.under12 >= 5) {
        this.suggestions.push("Kid-friendly merchandise like Cotton Candy and Chips/ Mickey Mouse Costume ,etc");
      }
      if (this.age1217 >= 5) {
        this.suggestions.push("Trendy clothing and soft drinks");
      }
      if (this.age1829 >= 5) {
        this.suggestions.push("For young adults: Primary focus is on food (Pizza, Fries, Hot Dog)");
      }
      if (this.above29 >= 5) {
        this.suggestions.push("For guardians, food and drinks");
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #0731fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

h2 {
  text-align: center;
  color: #fff;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
}

.input-field {
  width: calc(100% - 10px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form button[type="submit"]:hover {
  background-color: #0056b3;
}

.chart-container {
  display: flex;
  justify-content: space-evenly;
}

.chart-wrapper,
.suggestions-wrapper {
  max-width: calc(50% - 20px);
  padding: 20px;
  background-color: #6379e6;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.chart-title {
  margin-top: 0;
  text-align: center;
  color: #fff;
}
</style>
