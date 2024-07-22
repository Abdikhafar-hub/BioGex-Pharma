const { google } = require('googleapis');


// Ensure environment variables are loaded
const {
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  SPREADSHEET_ID,
} = process.env;

if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !SPREADSHEET_ID) {
  throw new Error('Missing required environment variables');
}

// Scopes for the Google Sheets API
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

// Load the service account credentials
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Properly format the private key
  },
  scopes: SCOPES,
});

// Create an instance of the Sheets API
const sheets = google.sheets({ version: 'v4', auth });

/**
 * Fetch data from Google Sheets
 * @returns {Promise<Array<Object>>} - An array of products
 */
async function fetchProducts() {
  try {
    // Fetch the data from the Google Sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:D', // Adjust the range if necessary
    });

    const rows = response.data.values;
    if (rows.length) {
      // Skip the header rows (1 through 7)
      return rows.slice(7).map(([number, product, description, price]) => ({
        number,
        product,
        description,
        price,
      }));
    } else {
      console.log('No data found.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    throw error;
  }
}

module.exports = { fetchProducts };