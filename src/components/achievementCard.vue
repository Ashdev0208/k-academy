

<template>
    <div class="achievement-card">
        <div class="card-image">
            <img :src="image" :alt="title" loading="lazy" />
        </div>
        <div class="card-content">
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-description">{{ description }}</p>
            <button v-if="actionText" class="card-action" @click="$emit('action')">
                {{ actionText }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AchievementCard',
    props: {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        actionText: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>
.achievement-card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    background: white;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.achievement-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-image {
    width: 100%;
    height: 220px;
    overflow: hidden;
    background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.achievement-card:hover .card-image img {
    transform: scale(1.05);
}

.card-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card-title {
    margin: 0 0 12px 0;
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.3;
}

.card-description {
    margin: 0 0 16px 0;
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    flex: 1;
}

.card-action {
    align-self: flex-start;
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
}

.card-action:hover {
    background: #0056b3;
}
</style>