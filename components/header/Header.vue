<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field">
            <VmSearch></VmSearch>
          </div>
          <div class="navbar-item field mb-3">
            <select
              class="form-select"
              aria-label="seleccionar categoria"
              @change="onSelectCategory()"
              v-model="slcCategory"
            >
              <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>


            </select>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item social">
            <a href="#" class="icon" :title="facebookTooltip">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="icon" :title="twitterTooltip">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="icon" :title="instagramTooltip">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="icon" :title="linkedinTooltip">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{
              numProductsAdded
            }}</span>
          </div>
        </div>
      </div>

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <VmMenu></VmMenu>
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <VmMenu></VmMenu>
      </div>
    </nav>
  </div>
</template>

<script>
import VmMenu from "../menu/Menu";
import VmSearch from "../search/Search";

export default {
  name: "VmHeader",

  data() {
    return {
      linkedinTooltip: "Follow us on Linkedin",
      facebookTooltip: "Follow us on Facebook",
      twitterTooltip: "Follow us on Twitter",
      instagramTooltip: "Follow us on Instagram",
      isCheckoutActive: false,
      isMenuOpen: false,
      slcCategory: 0,
      categories: []
    };
  },

  components: {
    VmSearch,
    VmMenu
  },

  computed: {
    numProductsAdded() {
      return this.$store.getters.productsAdded.length;
    }
  },
  mounted() {
    this.getProducts();
    this.getCategorys();
  },
  methods: {
    getProducts() {
      this.$axios
        .get("/api/" + 'products')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error("Hubo un error en el método list", error);
          throw error.response.data;
          // this.error_validator(error)
        });
    },
    getCategorys() {
      this.$axios
        .$get(`https://api.mercadolibre.com/sites/MCO/categories`)
        .then(response => {
          console.log(response);
          this.categories = response
        })
        .catch(error => {
          console.error("Hubo un error en el método list", error);
          throw error.response.data;
          // this.error_validator(error)
        });
    },
    onSelectCategory(value) {
      console.log(this.slcCategory);
      console.log(value);
      this.$axios
        .$get(`https://api.mercadolibre.com/sites/MCO/search?category=${this.slcCategory}`)
        .then(response => {
			const products = response.results
			const data = products.map( res => {
				console.log(res)
				return {
				id : res.id,
				title : res.title,
				description : 'Colombia',
				price : res.price,
				ratings : 5,
				reviews : 10,
				isAddedToCart : false,
				isAddedBtn : false,
				isFavourite : false,
				quantity : res.available_quantity}
			})
      		this.$store.commit('productsAdd', data);
			console.log(response)
        })
        .catch(error => {
          console.error("Hubo un error en el método list", error);
          throw error.response.data;
          // this.error_validator(error)
        });
    },
    showCheckoutModal() {
      this.$store.commit("showCheckoutModal", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  background: url("../../static/logobombink.jpg") no-repeat;
  background-position: 50% 90%;
  background-size: 40px;
  width: 80px;
  height: 35px;
}
.shopping-cart {
  cursor: pointer;
}
a {
  color: grey;
}
</style>
