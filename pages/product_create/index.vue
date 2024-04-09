<template>
    <div>
      <form @submit.prevent="submitForm" class="product-form">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="formData.name" required />
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea v-model="formData.description" required></textarea>
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" v-model="formData.price" required />
        </div>
        <div>
          <label for="discount">Discount:</label>
          <input type="number" v-model="formData.discount" />
        </div>
        <div>
          <label for="country">Country:</label>
          <select v-model="formData.country" required>
            <!-- Render options based on your Django model data -->
            <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name }}</option>
          </select>
        </div>
        <div>
          <label for="images">Images:</label>
          <input type="file" multiple @change="handleFileChange" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          description: '',
          price: null,
          discount: null,
          country: null,
          images: []
        },
        countries: [] // Populate this array with your Django ListItem data
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here (e.g., send data to your Django backend)
        console.log('Form submitted:', this.formData);
      },
      handleFileChange(event) {
        // Handle file change logic here (e.g., update images array)
        this.formData.images = Array.from(event.target.files);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .product-form label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  .product-form input,
  .product-form textarea,
  .product-form select {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .product-form button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .product-form button:hover {
    background-color: #45a049;
  }
  
  .product-form select {
    padding: 8px;
  }
  
  .product-form input[type="file"] {
    margin-top: 4px;
  }
  
  .product-form input[type="file"]::-webkit-file-upload-button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .product-form input[type="file"]::-webkit-file-upload-button:hover {
    background-color: #45a049;
  }
  </style>