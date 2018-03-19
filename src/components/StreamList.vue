<template>
  <div class="result-list">
    <h5 v-if="loading">Loading...</h5>
		<stream-item
				v-for="item in items" 
				v-bind:key="item._id"
				@clicked="updateSelected"
				v-bind:selectedItemId="selectedItemId"
				v-bind:item="item"></stream-item>
      <p v-if="errorMsg">{{errorMsg}}</p>
  </div>
</template>

<script>
import StreamItem from "./item/StreamItem";
import { HTTP } from "../http-common";

export default {
  name: "StreamList",
  data() {
    return {
      items: [],
      selectedItemId: null,
      loading: true,
      errorMsg: null
    };
  },
  created() {
    this.getData();
  },
  methods: {
    updateSelected: function(value) {
      console.log(value);
      this.selectedItemId = value;
    },
    getData: function() {
      HTTP.get("/stream")
        .then(response => {
          if (response.data.body) this.loading = false;
          this.items = response.data.body;
        })
        .catch(error => {
          this.loading = false;
          this.errorMsg = error.message;
        });
    }
  },
  components: {
    StreamItem
  }
};
</script>