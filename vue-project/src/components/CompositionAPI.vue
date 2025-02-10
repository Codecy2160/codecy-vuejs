<template>
    <div>
      <h1>REST API Example</h1>
      <button @click="fetchPosts">Fetch Posts</button>
      <button @click="createPost">Create Post</button>
      <button @click="updatePost">Update Post</button>
      <button @click="deletePost">Delete Post</button>
  
      <div v-if="loading">Loading...</div>
      <div v-else>
        <ul>
          <li v-for="post in posts" :key="post.id">
            {{ post.title }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const posts = ref([]);
  const loading = ref(false);
  
  const fetchPosts = async () => {
    loading.value = true;
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      posts.value = await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      loading.value = false;
    }
  };
  
  const createPost = async () => {
    const newPost = {
      title: 'New Post',
      body: 'This is a new post.',
      userId: 1,
    };
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      const data = await response.json();
      console.log('Created Post:', data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  
  const updatePost = async () => {
    const updatedPost = {
      id: 1,
      title: 'Updated Post',
      body: 'This post has been updated.',
      userId: 1,
    };
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });
      const data = await response.json();
      console.log('Updated Post:', data);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };
  
  const deletePost = async () => {
    const postId = 1; // ID of the post to delete
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      });
      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  </script>
  
  <style scoped>
  button {
    margin: 5px;
  }
  </style>