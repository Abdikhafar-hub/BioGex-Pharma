import { google } from 'googleapis';
import path from 'path';

// Load environment variables from .env.local
// dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Ensure environment variables are loaded
const {
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  SPREADSHEET_ID,
  SHEET_NAME,
} = process.env;

if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !SPREADSHEET_ID || !SHEET_NAME) {
  throw new Error('Missing required environment variables');
}

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Properly format the private key
  },
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

async function fetchProducts() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A8:D`, // Adjust the range if necessary
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.map(([number, product, description, price]) => ({
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

export async function GET() {
  try {
    const products = await fetchProducts();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500 });
  }
}