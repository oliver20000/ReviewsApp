<template>
    <div class="review-list">
      <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
    </div>
  </template>
  
  <script>
  import ReviewCard from "./ReviewCard.vue";
  
  export default {
    name: "ReviewList",
    components: { ReviewCard },
    props: {
      reviews: Array,
    },
  };
  </script>
  
  <style scoped>
  .review-list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  </style>