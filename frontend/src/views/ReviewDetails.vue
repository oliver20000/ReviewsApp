<template>
    <div class="review-details">
      <h2>{{ review.title }}</h2>
      <p>{{ review.text }}</p>
      <span class="rating">Rating: {{ review.rating }}/5</span>
    </div>
  </template>
  
  <script>
  export default {
    name: "ReviewDetails",
    data() {
      return {
        review: {},
      };
    },
    async created() {
      const reviewId = this.$route.params.id;
      try {
        const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/reviews/${reviewId}`);
        this.review = await response.json();
      } catch (error) {
        console.error("Erro ao buscar detalhes da review:", error);
      }
    },
  };
  </script>
  
  <style scoped>
  .review-details {
    padding: 20px;
    background: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .rating {
    color: #e67e22;
    font-weight: bold;
  }
  </style>