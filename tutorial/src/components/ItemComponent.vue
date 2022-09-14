<template>
  <div class="row">
    <div class="col-sm"><img src="../assets/item_image.png"></div>
    <div class="col-sm">
      <h5 style="font-weight: bold; text-align:left">{{title}}</h5>
      <h5>{{subtitle}}</h5>
      <p>{{text}}</p>
      <div class="text-left"><router-link class="btn btn-primary mt-auto" to="/">Nazaj</router-link>
</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'ItemComponent',
  props: {
    imgSrc: String,
    title: String,
    subtitle: String,
    text: String
  }
}
</script>
<style>
  a {
    text-align: left
  }
  p {
    text-align: left
  }
  h5 {
    text-align: left
  }
</style> 