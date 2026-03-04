<template>
  <div class="bg">
    <div class="registration-container">
      <h1>Registration Form</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="form.name" type="text" id="name" required placeholder="Enter your name" />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div class="form-group">
          <label for="number">Phone Number:</label>
          <input
            v-model="form.number"
            type="tel"
            id="number"
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div class="form-group">
          <label for="courses">Select Course:</label>
          <select v-model="form.course" id="courses" required>
            <option value="">Choose a course</option>
            <option value="vue">Vue.js</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="nodejs">Node.js</option>
          </select>
        </div>

        <button type="submit" class="submit-btn">Send to Telegram</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        number: '',
        course: '',
      },
      telegramToken: '8664887516:AAGgbKTJq506uXDYmz8lgQqrY4y2Q5ij0LM',
      chatId: '5008712403',
    }
  },
  methods: {
    async submitForm() {
      const message = `New Registration:\nName: ${this.form.name}\nEmail: ${this.form.email}\nPhone: ${this.form.number}\nCourse: ${this.form.course}`

      try {
        await fetch(`https://api.telegram.org/bot${this.telegramToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: this.chatId, text: message }),
        })
        alert('Registration sent successfully!')
        this.resetForm()
      } catch (error) {
        alert('Error sending registration')
        console.error(error)
      }
    },
    resetForm() {
      this.form = { name: '', email: '', number: '', course: '' }
    },
  },
}
</script>

<style scoped>
.bg {
  width: 100%;
  padding: 1rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.registration-container {
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}

h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: 2px solid transparent;
  transition: 0.4s all;
}
input:focus {
  outline: 2px solid #667eea;
  border-color: transparent;
}
.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #0084ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: #0073e6;
}
</style>
