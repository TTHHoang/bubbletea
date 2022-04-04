<template>
    <div>
        <div class=" banner menu">
          <Banner title="Products" />
        </div>
        <productsContent />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import ProductsContent from '@/components/ProductsContent.vue'

export default {
    name: 'products',
    components: {
        Banner,
        ProductsContent,
    },
    mounted () {
         window.scrollTo(0, 0);

    },
     created(){
        document.title = "Products"    
    }
}
</script>
