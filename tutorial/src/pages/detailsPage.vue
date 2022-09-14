<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="topnav" id="myTopnav"
            style="background-image: linear-gradient(-180deg, #48C6EF 0%, #6F86D6 100%);">
            <router-link to="/">Domov</router-link>
            <router-link to="/">O nas</router-link>
            <router-link to="/">Kontakt</router-link>
            <router-link to="/">Pišite nam</router-link>
            <router-link to="/">IZDELKI</router-link>
          </div><!--  -->
        </div>
      </div>
      <div class="row mt-4">
        <ItemComponent :imgSrc="displayedItem.imgSrc" :title="displayedItem.title" :subtitle="displayedItem.subtitle" :text="displayedItem.text"></ItemComponent>
      </div>
    </div>
  </div>
</template>
  
<script>
import ItemComponent from '@/components/ItemComponent.vue';
export default {
  name: 'DetailsPage',
  props: {
    id: Number
  },
  data() {
    return {
      items: [
        { "imgSrc": "../assets/item_image.png", "title": "IZDELEK 1", "subtitle": "Podnaslov izdelka 1", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { "imgSrc": "../assets/item_image.png", "title": "IZDELEK 2", "subtitle": "Podnaslov izdelka 2", "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { "imgSrc": "../assets/item_image.png", "title": "IZDELEK 3", "subtitle": "Podnaslov izdelka 3", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }
      ],
      displayedItem: null,
    }
  },
  created() {
    switch (this.id) {
      case "1":
        this.displayedItem = this.$data.items[0];
        break;
      case "2":
        this.displayedItem = this.$data.items[1];
        break;
      default:
        this.displayedItem = this.$data.items[2];
    }

    console.log('created method')

  },
  components: {
    ItemComponent
}
}
</script>
<style>
.topnav {
  background-color: #333;
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: light;
  color: white;
}

/* Add an active class to highlight the current page */
.topnav a.active {
  background-color: #04AA6D;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}
</style>