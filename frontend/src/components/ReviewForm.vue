<template>
    <form @submit.prevent="submitReview" class="review-form">
      <label for="title">Título</label>
      <input type="text" id="title" v-model="review.title" required />
  
      <label for="text">Texto</label>
      <textarea id="text" v-model="review.text" required></textarea>
  
      <label for="rating">Rating</label>
      <select id="rating" v-model="review.rating" required>
        <option v-for="n in 5" :key="n" :value="n">{{ n }} estrela{{ n > 1 ? 's' : '' }}</option>
      </select>
  
      <button type="submit">Enviar Review</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        review: {
          title: '',
          text: '',
          rating: 1,
        },
      };
    },
    methods: {
      async submitReview() {
        try {
          const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.review),
          });
          if (response.ok) {
            alert('Review enviada com sucesso!');
          } else {
            console.error('Erro ao enviar review');
          }
        } catch (error) {
          console.error('Erro ao enviar review:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .review-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .review-form label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .review-form input, .review-form textarea, .review-form select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  .review-form button {
    padding: 10px;
    color: white;
    background-color: #3498db;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>  