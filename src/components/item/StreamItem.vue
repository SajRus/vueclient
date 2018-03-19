<template>
<div class="item-container">
  <div class="item-name">
    <button class="action-buttons" v-on:click="showGalleryAction(item._id)">
      <span v-if="!showGallery">Show Gallery</span>
      <span v-if="showGallery">Hide Gallery</span>
    </button>
    <stream-name
    v-bind:metadata="item.metadata"
    v-bind:entities="item.entities"></stream-name>
    <button class="action-buttons" v-on:click="showGraphAction(item._id)">
      <span v-if="!showGraph">Show Graph</span>
      <span v-if="showGraph">Hide Graph</span>
    </button>
  </div>
  <div class="item-gallery" v-if="showGallery && showDetails">
    <stream-gallery 
      v-bind:preys="item.preys"> </stream-gallery>
  </div>
  <div class="item-graph" v-if="showGraph && showDetails">
    <stream-graph
      v-bind:colors="item.distributions.colors"></stream-graph>
  </div>
  
</div>
</template>
<script>
import StreamName from "./StreamName";
import StreamGallery from "./StreamGallery";
import StreamGraph from "./Streamgraph";

export default {
  name: "StreamItem",
  props: ["item", "selectedItemId", "updateSelected"],
  data() {
    return {
      showGallery: false,
      showGraph: false,
      showDetails: false
    };
  },
  watch: {
    selectedItemId: function(id) {
      this.showDetails = id === this.item._id;
    }
  },
  components: {
    StreamName,
    StreamGallery,
    StreamGraph
  },
  methods: {
    showGalleryAction(id) {
      this.$emit("clicked", id);
      this.showGallery = !this.showGallery;
      this.showGraph = false;
    },
    showGraphAction(id) {
      this.$emit("clicked", id);
      this.showGallery = false;
      this.showGraph = !this.showGraph;
    }
  }
};
</script>
<style>
button.action-buttons {
  padding: 4px 20px;
  margin: 15px;
}
.item-name {
  display: -webkit-inline-box;
  display: inline-flex;
}
</style>
