
<template>
    <div class="registration-container">
        <div class="registration-form">
            <h1>Create Account</h1>
            
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input
                        id="name"
                        v-model="form.name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                        id="password"
                        v-model="form.password"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        v-model="form.confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        required
                    />
                </div>

                <button type="submit" class="btn-submit">Register</button>
            </form>

            <p class="login-link">
                Already have an account? <a href="#/login">Login here</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            if (this.form.password !== this.form.confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            console.log('Form submitted:', this.form);
            // Add your registration logic here
        }
    }
};
</script>

<style scoped>
.registration-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.registration-form {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    color: #555;
    font-weight: 500;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
}

input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
}

.btn-submit {
    width: 100%;
    padding: 12px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-submit:hover {
    background: #5568d3;
}

.login-link {
    text-align: center;
    margin-top: 20px;
    color: #666;
    font-size: 14px;
}

.login-link a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
}

.login-link a:hover {
    text-decoration: underline;
}
</style>