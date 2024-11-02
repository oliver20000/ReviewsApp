<template>
    <div class="review-card">
        <router-link :to="`/review/${review.id}`" class="review-card">
        <h3 class="review-title">{{ review.title }}</h3>
        <p class="review-text">{{ review.text }}</p>
        <span class="review-rating">Rating: {{ review.rating }}/5</span>
  </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "ReviewCard",
    props: {
      review: Object,
    },
  };
  </script>
  
  <style scoped>
  .review-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    transition: transform 0.2s;
  }
  
  .review-card:hover {
    transform: translateY(-5px);
  }
  
  .review-title {
    color: #3498db;
    font-size: 18px;
  }
  
  .review-text {
    color: #666;
    margin-top: 8px;
  }
  
  .review-rating {
    color: #e67e22;
    font-weight: bold;
  }
  </style> 