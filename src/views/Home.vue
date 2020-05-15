<template>
  <div class="home container">
    <AppHeader />
    <div class="parent">
      <div class="searchBox">
        <input type="text" v-model="search" placeholder="Enter acronym" />
      </div>
      <button @click="showPopular" class="btn btn-outline-dark buttonSelection">Popular</button>
      <button @click="showAll" class="btn btn-outline-dark buttonSelection">Show me All</button>
      <div
        v-show="!popular"
        class="searchResult"
        v-for="(value, index) in filteredList"
        :key="index"
      >
        <div class="grid">
          <div class="left" :class="{'grayHighlight': index % 2 !== 0 }">{{ value.acronym }}</div>
          <div
            class="right"
            :class="{'grayHighlight': index % 2 !== 0 }"
          >{{ value.expanded_version}}</div>
        </div>
      </div>
      <div
        v-show="popular"
        class="searchResult"
        v-for="(value, index) in popularList"
        :key="10000 + index"
      >
        <div class="grid">
          <div class="left" :class="{'grayHighlight': index % 2 !== 0 }">{{ value.acronym }}</div>
          <div
            class="right"
            :class="{'grayHighlight': index % 2 !== 0 }"
          >{{ value.expanded_version}}</div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import json from "../techronym_data.json";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "Home",
  data() {
    return {
      search: "",
      acronymList: json,
      popular: true,
      popularList: [
        {
          acronym: "AFK ",
          expanded_version: "Away From Keyboard"
        },
        {
          acronym: "BRB ",
          expanded_version: "Be Right Back"
        },
        {
          acronym: "PHAT ",
          expanded_version: "Pretty Hot And Tempting"
        },
        {
          acronym: "TTYL ",
          expanded_version: "Talk To You Later"
        },
        {
          acronym: "DIY ",
          expanded_version: "Do It Yourself"
        },
        {
          acronym: "DND ",
          expanded_version: "Do Not Disturb"
        },
        {
          acronym: "WFH",
          expanded_version: "Work From Home"
        },
        {
          acronym: "YOLO",
          expanded_version: "You Only Live Once"
        },
        {
          acronym: "FOMO",
          expanded_version: "Fear Of Missing Out"
        }
      ]
    };
  },
  created() {
    this.popularList = this.popularList.sort((a, b) =>
      a.acronym > b.acronym ? 1 : -1
    );
  },
  computed: {
    filteredList() {
      return this.acronymList
        .filter(obj => {
          return obj.acronym.toLowerCase().includes(this.search.toLowerCase());
        })
        .sort((a, b) => (a.acronym > b.acronym ? 1 : -1));
    }
  },
  methods: {
    showPopular() {
      this.popular = true;
      return this.popularList.sort((a, b) => (a.acronym > b.acronym ? 1 : -1));
    },
    showAll() {
      this.popular = false;
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
};
</script>


<style scoped>
.parent {
  margin: 10px;
}

.searchResult {
  margin: 20px;
}

.parent input {
  height: 40px;
  width: 400px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  border: 2px solid lightgray;
  border-radius: 5px;
}

.parent input:focus-within {
  outline: none !important;
  border: 2px solid #777;
}

.searchBox {
  margin-bottom: 20px;
}

.grid {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 10px;
}

.left {
  width: 30%;
  padding: 10px;
  border: 1px solid black;
  font-weight: bold;
}

.right {
  width: 70%;
  padding: 10px;
  border: 1px solid black;
  font-weight: 500;
}

.grayHighlight {
  background-color: rgb(240, 240, 240);
}

.buttonSelection {
  margin-left: 10px;
  margin-right: 10px;
}
</style>