<template>
  <p v-html="$options.filters.strong(metadata.name, entities)">{{metadata.name}}</p>
</template>

<script>
export default {
  name: "StreamName",
  props: ["metadata", "entities"],
  filters: {
    strong: function(value, entities) {
      let newString = value;
      entities.map(el => {
        newString = newString.replace(
          el["_id"],
          "<span class='highlight'>" + el["_id"] + "</span>"
        );
      })[0];
      return newString;
    }
  }
};
</script>
<style>
.highlight {
  font-weight: bold;
}
</style>
