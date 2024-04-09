<template>
  <p class="control has-icons-left">
    <input
      class="input is-rounded"
      type="text"
      v-model="value"
      :placeholder="placeholder"
      @keyup="search(value)"
    />
    <span class="icon is-small is-left">
      <i class="fa fa-search"></i>
    </span>
  </p>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      value: "",
	  slcCategory: 0
    };
  },

  computed: {
    placeholder() {
      if (this.$route.path === "/wishlist") {
        return "Search in wishlist...";
      } else {
        return "Search...";
      }
    }
  },

  methods: {
	onSelectCategory(value) {
		console.log(value)
	},
    search(value) {
      this.$axios
        .$get(`https://api.mercadolibre.com/sites/MCO/search?q=${value}`)
        .then(response => {
			const products = response.results
			console.log(products)
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
    }
  }
};
</script>
