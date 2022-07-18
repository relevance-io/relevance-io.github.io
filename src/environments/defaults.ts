export const environment = {
  production: false,

  // Mailchimp configuration
  mailchimp: {
    endpoint: 'https://relevance.us2.list-manage.com/subscribe/post-json',
    secret: 'c5e4a4d2e9277c787d1b92ec3',
    formId: '18b3c57ffc',
    optInGroup: 'group[67514][32]',
  },

  // Google services configuration
  google: {
    recaptchaSiteKey: '6LclXuEZAAAAAE4U8P_wm5yDDtMk0wbc6iGDvMFc',
    trackerId: 'UA-152799350-1',
  },
};
