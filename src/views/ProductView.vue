<template>
    <div v-if="getProducts.products == undefined">
    <div class="w-full h-screen bg-transparent text-green-500 grid grid-cols-1 grid-rows-1 place-items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-repeat animate-spin" viewBox="0 0 16 16">
      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
      <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
    </svg>
    </div>
    </div>
    <div v-else>
    <main class="my-8">
        <div class="container h-full mx-auto px-6">
            <h3 class="text-black text-center items-center justify-center text-2xl font-bold">
                PRODUCT PAGE</h3>
                <h3 class="text-black text-sm text-center items-center justify-center font-medium">
                    200+ Products</h3>
        
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" v-for="(product) in getProducts.products.data" :key="product.id">
                    <div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1328.jpg?size=626&ext=jpg&ga=GA1.1.1506769116.1690802231&semt=ais')">
                    </div>
                    <div class="px-5 py-3">
                        <RouterLink  :to="'/product/singleproduct/' + product.slug">
                        <h3 class="text-black uppercase">{{ product.name }}</h3>
                        </RouterLink>
                        <span class="text-black mt-2">${{ product.base_price }}</span>
                    </div>
                </div>
                </div>
        </div>
    </main>
    </div>
</template>
<script>
  import { mapGetters, mapActions} from 'vuex';

export default {
    computed: {
        ...mapGetters('product', ['getProducts']),
    },
    methods: {
        ...mapActions('product', ['fetchProducts']),
    },
    created() {
        this.fetchProducts();
    },
}
</script>