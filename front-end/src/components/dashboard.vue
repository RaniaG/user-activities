<template>
  <div>
    <div class="row dashboard__header d-flex justify-content-center">
      <div class="col-md-4">
        <div class="card dashboard__card dashboard__card--violet" @click="onClick('team')">
          <div class="card-body d-flex flex-column">
            <font-awesome-icon icon="users"></font-awesome-icon>
            <h5 class="card-title">Teams</h5>
            <h1 class="align-self-end">{{numberOfTeams}}</h1>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card dashboard__card dashboard__card--blue" @click="onClick('user')">
          <div class="card-body d-flex flex-column">
            <font-awesome-icon icon="user-alt"></font-awesome-icon>
            <h5 class="card-title">Users</h5>
            <h1 class="align-self-end">{{numberOfUsers}}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead class="thead-light">
            <tr>
              <th scope="col">User id</th>
              <th scope="col">Session id</th>
              <th scope="col">Activity</th>
              <th scope="col">Action</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in realTimeData" :key="record.userId">
              <td>{{record.userId}}</td>
              <td>{{record.sessionId}}</td>
              <td>{{record.activity}}</td>
              <td>
                <span
                  class="badge badge-primary"
                  :class="{'badge-primary':record.action=='open','badge-secondary':record.action!='open'}"
                >{{record.action}}</span>
              </td>
              <td>{{record.timestamp}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Consts } from "../consts";
export default {
  data: function() {
    return {
      realTimeData: [],
      numberOfTeams: 0,
      numberOfUsers: 0
    };
  },
  methods: {
    onClick: function(goTo) {
      if (goTo == "team") this.$router.push("/teams");
      else if (goTo == "user") this.$router.push("/users");
    }
  },
  created() {
    // this.$http.get(Consts.baseUrl + Consts.dashboardRoute).then(
    //   response => {
    //     // success callback
    //   },
    //   response => {
    //     // error callback
    //   }
    // );
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &__header {
    margin: 4rem 0;
  }
  &__card {
    &:hover {
      cursor: pointer;
    }
    color: white;
    &--violet {
      background-color: #b577f7;
    }
    &--blue {
      background-color: #6da0e5;
    }
  }
}
</style>