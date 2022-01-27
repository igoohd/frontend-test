<template>
  <header class="custom-header">
    <h1 @click="redirectToProductList" class="title">MagaNets</h1>
    <div class="navigation-box">
      <ul class="list-wrapper">
        <li>
          <LocationDotIcon />
          Cidade: {{ userCity }}
        </li>
        <li @click="callPhoneCentral" class="button">
          <PhoneIcon />
          Central de atendimento
        </li>
        <li @click="redirectToWishList" class="button">
          <HeartIcon />
          Lista de desejos
        </li>
      </ul>
      <input
        @input="searchProduct"
        type="text"
        class="input"
        placeholder="Busca"
      />
    </div>
  </header>
</template>

<script>
import HeartIcon from "@/components/icons/HeartIcon";
import LocationDotIcon from "@/components/icons/LocationDotIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import axios from "axios";
import { mapMutations, mapState } from "vuex";
export default {
  name: "PageHeader",

  components: {
    HeartIcon,
    LocationDotIcon,
    PhoneIcon,
  },

  data() {
    return {
      searchedProducts: [],
      userLatitude: "",
      userLongitude: "",
      userCity: "...",
    };
  },

  created() {
    this.getUserLocation();
  },

  methods: {
    ...mapMutations(["setFilteredProducts"]),

    callPhoneCentral() {
      window.open("tel:3125574039");
    },

    async getStreetAddressFrom() {
      try {
        var { data } = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            this.userLatitude +
            "," +
            this.userLongitude +
            "&key=AIzaSyAMdrjXpdrf58MVgdRYw9MUngqpzk8Ds-Q"
        );
        if (data.error_message) {
          console.log(data.error_message);
        } else {
          this.userCity =
            data.results[0].address_components[3].long_name +
            " - " +
            data.results[0].address_components[4].short_name;
        }
      } catch (error) {
        console.log(error.message);
      }
    },

    getUserLocation() {
      const success = (position) => {
        this.userLatitude = position.coords.latitude;
        this.userLongitude = position.coords.longitude;

        this.getStreetAddressFrom();
      };

      const error = (err) => {
        console.log(err);
        this.userCity = "Localização desabilitada";
      };

      navigator.geolocation.getCurrentPosition(success, error);
    },

    redirectToProductList() {
      this.$router.push({ name: "Home" });
    },

    redirectToWishList() {
      this.$router.push({ name: "WishList" });
    },

    searchProduct(event) {
      this.searchedProducts = this.productList.filter((obj) =>
        JSON.stringify(obj)
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      this.setFilteredProducts(this.searchedProducts);
    },
  },

  computed: {
    ...mapState(["productList"]),
  },
};
</script>

<style lang="scss" scoped>
.custom-header {
  background-color: $brand-primary;
  color: $white;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 5rem;

  > .title {
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }
}

.navigation-box {
  width: 100%;
  text-align: left;

  svg {
    width: 10px;
  }

  > .input {
    width: 100%;
    padding: 0.7rem;
    border: 0;
    border-radius: 5px 5px;
    background-image: url("../assets/images/search-icon.svg");
    background-size: 15px;
    background-position: 10px 11px;
    background-repeat: no-repeat;
    padding-left: 35px;
  }
}

.list-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  > .button {
    cursor: pointer;
  }

  > .button:hover {
    text-decoration: underline;
  }
}

@media (max-width: 800px) {
  .custom-header {
    flex-direction: column;
  }

  .list-wrapper {
    flex-direction: column;
    text-align: center;
    gap: 5px;
  }
}
</style>
