import axios from 'axios';

export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    sendEmail() {
      axios.post('https://your-email-service.com/send-email', {
        email: this.email
      })
      .then(response => {
        console.log(response);
        alert('Email sent successfully!');
      })
      .catch(error => {
        console.error(error);
        alert('Error sending email!');
      });
    }
  }
}