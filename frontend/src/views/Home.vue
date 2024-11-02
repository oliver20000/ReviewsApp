<template>
  <div>
    <h2>Reviews</h2>
    <div v-if="showReview">
      
      <h3>{{ lastReview.title }}</h3>
      <p>{{ lastReview.text }}</p>
      <p>Rating: {{ lastReview.rating }} estrelas</p>
      

      <button @click="resetForm">Voltar</button>
    </div>
    <div v-else>

      <form @submit.prevent="submitReview">
        <div>
          <label for="title">Título</label>
          <input type="text" v-model="review.title" id="title" required />
        </div>
        <div>
          <label for="text">Texto</label>
          <textarea v-model="review.text" id="text" required></textarea>
        </div>
        <div>
          <label for="rating">Rating</label>
          <select v-model="review.rating" id="rating" required>
            <option disabled value="">Selecione um rating</option>
            <option v-for="n in 5" :key="n" :value="n">{{ n }} estrelas</option>
          </select>
        </div>
        <button type="submit">Enviar Review</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HomeView",
  data() {
    return {
      review: {
        title: '',
        text: '',
        rating: null,
      },
      lastReview: null,
      showReview: false,
    };
  },
  methods: {
    async submitReview() {
      try {
        const response = await axios.post('http://localhost:3000/reviews', this.review);
        this.lastReview = response.data;
        this.showReview = true;
        alert('Review enviada com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar review:', error);
        alert('Ocorreu um erro ao enviar o review.');
      }
    },
    resetForm() {

      this.review = {
        title: '',
        text: '',
        rating: null,
      };
      this.showReview = false;
    },
  },
};
</script>

<style scoped>

form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  background: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
form div {
  margin-bottom: 1em;
}
form label {
  margin-bottom: 0.5em;
  color: #333333;
  display: block;
}
form input,
form textarea,
form select {
  border: 1px solid #dddddd;
  padding: 0.5em;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}
form button {
  padding: 0.7em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
form button:hover {
  background-color: #0056b3;
}
</style>