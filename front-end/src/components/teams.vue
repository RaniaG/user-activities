<template>
  <div class="row">
    <div class="col-md-6">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Team Id</th>
            <th scope="col">Activity</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in data"
            :key="item.teamId+item.activity"
            @click="prepareChartData(item.teamId)"
            :class="{'active':item.teamId==activeTeamId}"
          >
            <td>{{item.teamId}}</td>
            <td>{{item.activity}}</td>
            <td>{{item.duration}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-6" v-if="activeTeamId>0">
      <app-donut-chart :chartData="chartData" :options="chartOptions"></app-donut-chart>
    </div>
  </div>
</template>

<script>
import chart from "./donutChart";
import { generateRandomColor } from "../helpers";
export default {
  data: function() {
    let dummyData = [12, 19, 3, 5, 2, 3];
    return {
      data: [
        { teamId: 1, activity: "Facebook", duration: 120 },
        { teamId: 1, activity: "Whatsapp", duration: 30 },
        { teamId: 2, activity: "IDE", duration: 200 },
        { teamId: 3, activity: "Facebook", duration: 29 }
      ],
      activeTeamId: -1,
      chartData: {},
      chartOptions: {}
    };
  },
  components: {
    "app-donut-chart": chart
  },
  methods: {
    prepareChartData(teamId) {
      this.activeTeamId = teamId;
      let teamData = this.data.filter(e => e.teamId == teamId);
      this.chartData = {
        labels: teamData.map(e => e.activity),
        datasets: [
          {
            label: "# of Votes",
            data: teamData.map(e => e.duration),
            backgroundColor: teamData.map(e => generateRandomColor())
          }
        ]
      };
      console.log(this.chartData);
    }
  },
  created() {
    this.prepareChartData();
  }
};
</script>

<style lang="scss" scoped>
tbody tr:hover {
  cursor: pointer;
}
tbody tr.active {
  background-color: #e9ecef;
}
</style>