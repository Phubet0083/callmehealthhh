<template>

<v-container class="d-flex justify-center align-center">
  <v-img
    src="https://assets-us-01.kc-usercontent.com/ffacfe7d-10b6-0083-2632-604077fd4eca/31fc256e-801c-4068-acb7-2b93187aa37c/What-is-Nutrition-Counseling-iStock-1416417320-2023-2-TW-1024x512.jpg"
    :height="300"
    :width="300"
    class="position-relative"
  >
    <v-btn
      class="position-absolute"
      style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
      color="#B2FF59"
    >
     <h1>Start Quiz</h1>
    </v-btn>
  </v-img>
</v-container>




<br><hr color="#ECEFF1"/>

<h2>Meal Plan Recommendations</h2>

    <div class="slider">
      <div class="slider-inner">
        <div class="slide">
          <div class="blog-card" v-for="(blog, index) in blogs" :key="index">
            <img :src="blog.image" :alt="blog.alt">
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogs: [
          {
            image: '/images/pp2.png',
            alt: 'Image 1',
            title: 'Blog Post 1',
            description: 'This is a sample blog post.'
          },
          {
            image: '/images/pp2.png',
            alt: 'Image 2',
            title: 'Blog Post 2',
            description: 'This is another sample blog post.'
          },
          {
            image: '/images/pp2.png',
            alt: 'Image 2',
            title: 'Blog Post 3',
            description: 'This is another sample blog post.'
          },
          {
            image: '/images/pp2.png',
            alt: 'Image 2',
            title: 'Blog Post 4',
            description: 'This is another sample blog post.'
          },
          {
            image: '/images/pp2.png',
            alt: 'Image 2',
            title: 'Blog Post 5',
            description: 'This is another sample blog post.'
          },
          {
            image: '/images/pp2.png',
            alt: 'Image 2',
            title: 'Blog Post 6',
            description: 'This is another sample blog post.'
          },
          {
            image: '/images/pp2.png',
            alt: 'Image 2',
            title: 'Blog Post 7',
            description: 'This is another sample blog post.'
          },
          {
            image: '/images/pp2.png',
            alt: 'Image 2',
            title: 'Blog Post 8',
            description: 'This is another sample blog post.'
          },
          
          // Add more blog posts here
        ]
      }
    }
  }
  </script>
  
  <style scoped>

  .text01{
    display: flex;
    text-align: center;
  }
  .slider {
    width: 100%;
    overflow: hidden;
    padding: 20px;
  }
  
  .slider-inner {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 20px;
  }
  
  .slide {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .blog-card {
    width: 300px;
    margin: 20px;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 20px;
  }
  
  .blog-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  
  .blog-card h2 {
    font-size: 18px;
    margin-top: 10px;
  }
  
  .blog-card p {
    font-size: 14px;
    margin-top: 10px;
  }
  
  /* Make the slider responsive */
  @media (max-width: 768px) {
    .slider-inner {
      flex-wrap: wrap;
    }
    .slide {
      flex-wrap: wrap;
    }
    .blog-card {
      width: 100%;
      margin: 10px;
    }
  }
  </style>