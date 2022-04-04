<template>
  <div class="container products py-5">
  <div class="row py-5">
    <div class="col-12 mb-5">
        <p> Mauris sodales lacus in mi facilisis aliquam. Duis ultrices nec velit nec accumsan. Praesent condimentum odio nec enim euismod accumsan. Quisque viverra est quis purus porta dignissim. Ut tincidunt lorem vel vehicula aliquam. Maecenas quis elementum eros. Donec quis eros quis tellus porttitor hendrerit. Curabitur velit lacus, venenatis non purus vel. Mauris sodales lacus in mi facilisis aliquam. Duis ultrices nec velit nec accumsan. Praesent condimentum odio nec enim euismod accumsan. Quisque viverra est quis purus porta dignissim. Ut tincidunt lorem vel vehicula aliquam. Maecenas quis elementum eros. Donec quis eros quis tellus porttitor hendrerit. Curabitur velit lacus, venenatis non purus vel. Mauris sodales lacus in mi facilisis aliquam. </p>

     <p> Mauris sodales lacus in mi facilisis aliquam. Duis ultrices nec velit nec accumsan. Praesent condimentum odio nec enim euismod accumsan. Quisque viverra est quis purus porta dignissim. Ut tincidunt lorem vel vehicula aliquam. Maecenas quis elementum eros. Donec quis eros quis tellus porttitor hendrerit. Curabitur velit lacus, venenatis non purus vel. Mauris sodales lacus in mi facilisis aliquam. Duis ultrices nec velit nec accumsan. Praesent condimentum odio nec enim euismod accumsan. Quisque viverra est quis purus porta dignissim. Ut tincidunt lorem vel vehicula aliquam. Maecenas quis elementum eros. Donec quis eros quis tellus porttitor hendrerit. Curabitur velit lacus, venenatis non purus vel. Mauris sodales lacus in mi facilisis aliquam. </p>
    </div>
    <div class="col-md-4 align-items-center d-flex flex-column text-center">
      <img src="../img/bbb.jpg" alt="bubble tea">
      <h2>Milk tea</h2>
      <ul>
        <li v-for='milktea in milkteas'>
          {{ milktea.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-4 align-items-center d-flex flex-column text-center">
      <img src="../img/gong-cha.png" alt="bubble tea">

      <h2>Fruittea</h2>
      <ul>
        <li v-for='fruittea in fruitteas'>
          {{ fruittea.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-4 align-items-center d-flex flex-column text-center">
      <img src="../img/leaf.jpg" alt="bubble tea">

      <h2>Specials</h2>
      <ul>
        <li v-for='special in specials'>
          {{ special.name }}
        </li>
      </ul>
    </div>

</div>
</div>

</template>

<script>


export default {
  data : function () {
    return {

        milkteas: [
            { name:'Blueberry' },
            {name: 'Coconut'},
            {name: 'Honeydew'},
            {name:'Mango'},
            {name:'Strawberry'},
            {name:'Taiwanese Classic'},
            {name:'Taro'},
            {name: 'Vanilla'},
            {name: 'Wintermelon'}

        ],

        fruitteas: [
            { name:'Blueberry' },
            {name: 'Green Apple'},
            {name: 'Hibiscus'},
            {name:'Honeydew'},
            {name:'Kumquat'},
            {name:'Lychee'},
            {name:'Mango'},
            {name: 'Peach'},
            {name: 'Pineapple'}

        ],
        specials: [
            { name:'Aurora Bubble Tea' },
            {name: 'Brown Sugar Dirty Tea'},
            {name: 'Hibiscus'},
            {name:'Cherry'},
            {name:'    Galaxy Inferno'},
            {name:'Lychee'},
            {name:'    Japanese Matcha'},
            {name: 'Peach'},
            {name: '    Taro Frappé'}

        ],

    }
  }

}


</script>
