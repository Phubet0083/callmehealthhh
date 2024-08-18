<template>


    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      >
      <v-img :src="item.src"  
               :contain="true" 
               height="100%"
               width="100%"/>
        <v-carousel-item-caption>
          {{ item.caption }}
        </v-carousel-item-caption>
      </v-carousel-item>
    </v-carousel>

<br><hr color="#ECEFF1"/>


  <v-container class="d-flex justify-center ">
     <v-contianer fuild >
        <v-img src="/images/pp2.png" :height="300" :width="300"></v-img>
     </v-contianer>
     

  <v-card :height="300" :width="400"
  title="Meal Plan Recommendations"
  text="Discover personalized meal plans tailored to your unique dietary needs and preferences, helping you stay on track with your health goals."
  variant="outlined"
>
  <v-card-actions>
    <v-btn color="green">Click me</v-btn>
  </v-card-actions>
</v-card>
  </v-container>
  <br><hr color="#ECEFF1"/>


  
</template>


<script>
export default {
  data() {
    return {
      items: [
      {
          src: '/images/banner-home.png',
          caption: 'Slide 1'
        },
        {
          src: 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSC5SrKZmrLFBUQiftQv97TV27pugh.jpg',
          caption: 'Slide 2'
        },
        {
          src: 'https://www.matichonweekly.com/wp-content/uploads/2023/07/01-5.jpg',
          caption: 'Slide 3'
        }
      ]
    }
  }
}
</script>

