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
        <div class="col-sm">
          <div class="card h-100" style="width: auto;">
            <img class="card-img-top" src="../assets/item_image.png" alt="Card image cap">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title" style="font-weight: bold">{{items[0].title}}</h5>
              <h5>{{items[0].subtitle}}</h5>
              <p class="card-text">{{items[0].text}}</p>
              <router-link to="/details/1" class="btn btn-primary mt-auto" style="margin-left: auto; margin-right: auto">Več o izdelku 1</router-link>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card h-100" style="width: auto;">
            <img class="card-img-top" src="../assets/item_image.png" alt="Card image cap">
            <div class="card-body d-flex flex-column" >
              <h5 class="card-title" style="font-weight: bold">{{items[1].title}}</h5>
              <h5>{{items[1].subtitle}}</h5>
              <p class="card-text">{{items[1].text}}</p>
              <router-link to="/details/2" class="btn btn-primary mt-auto" style="margin-left: auto; margin-right: auto">Več o izdelku 2</router-link>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card h-100" style="width: auto;">
            <img class="card-img-top" src="../assets/item_image.png" alt="Card image cap">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title" style="font-weight: bold">{{items[2].title}}</h5>
              <h5>{{items[2].subtitle}}</h5>
              <p class="card-text">{{items[2].text}}</p>
              <router-link class="btn btn-primary mt-auto" style="margin-left: auto; margin-right: auto" to="/details/3">Več o izdelku 3</router-link>

            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card h-100" style="width: auto;">
            <img class="card-img-top" src="../assets/item_image.png" alt="Card image cap">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title" style="font-weight: bold">{{items[3].title}}</h5>
              <h5>{{items[3].subtitle}}</h5>
              <p class="card-text">{{items[3].text}}</p>
              <router-link class="btn btn-primary mt-auto" style="margin-left: auto; margin-right: auto" to="/details/4">Več o izdelku 4</router-link>

            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card h-100" style="width: auto;">
            <img class="card-img-top" src="../assets/item_image.png" alt="Card image cap">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title" style="font-weight: bold">{{items[4].title}}</h5>
              <h5>{{items[4].subtitle}}</h5>
              <p class="card-text">{{items[4].text}}</p>
              <router-link class="btn btn-primary mt-auto" style="margin-left: auto; margin-right: auto" to="/details/5">Več o izdelku 5</router-link>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'MasterPage',
  props: {
    msg: String
  },
  data() {
    return {
      items: [
        { "title": "IZDELEK 1", "subtitle": "Podnaslov izdelka 1", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { "title": "IZDELEK 2", "subtitle": "Podnaslov izdelka 2", "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { "title": "IZDELEK 3", "subtitle": "Podnaslov izdelka 3", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        { "title": "IZDELEK 4", "subtitle": "Podnaslov izdelka 4", "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "title": "IZDELEK 5", "subtitle": "Podnaslov izdelka 5", "text": "Fames ac turpis egestas sed tempus. Nec feugiat nisl pretium fusce id velit ut tortor pretium." }
      ]
    }
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