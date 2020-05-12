<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: ["options", "chartData"],
  mounted() {
    console.log(this.chartData);
    this.renderChart(this.chartData, this.options);
  }
};
</script>

<style lang="scss" scoped>
</style>