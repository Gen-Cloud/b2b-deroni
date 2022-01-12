module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5fbb7f13ab130448ffc825d736712ddb'),
  },
});
