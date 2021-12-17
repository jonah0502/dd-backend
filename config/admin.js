module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a4d74229c9bfa7e169a198600344b55'),
  },
});
