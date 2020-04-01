//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

export default {
    db: {
        uri: '', //place the URI of your mongo database here.
    },
    mc: {
      user: 'apikey:<API_KEY>' // Add this to your config and replace <> with the MailChimp API key
    },
};
