<template>
    <div>
        <div class=" banner menu">
          <Banner title="Contact" />
         
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col-md-8">
                     <div class="content">
               Donec quis eros quis tellus porttitor hendrerit. Curabitur velit lacus, venenatis non purus vel. Mauris sodales lacus in mi facilisis aliquam. Duis ultrices nec velit nec accumsan. Praesent condimentum odio nec enim euismod accumsan. Quisque viverra est quis purus porta dignissim. Ut tincidunt lorem vel vehicula aliquam. Maecenas quis elementum eros. Donec quis eros quis tellus porttitor hendrerit. Curabitur velit lacus, venenatis non purus vel. Mauris sodales lacus in mi facilisis aliquam. 
              </div>
                    </div>
            </div>            
        </div>

        <contactForm />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import ContactForm from '@/components/Form.vue'

export default {
    name: 'Contact',
    components: {
        Banner,
        ContactForm,
    },
    mounted (){
         window.scrollTo(0, 0);

    },
     created(){
        document.title = "Contact us"    
    }
}
</script>
