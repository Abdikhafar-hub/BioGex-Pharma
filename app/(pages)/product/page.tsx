import Button from '@/components/sections/Button';
import ProductsTable from '@/components/sections/ProductsTable'
import { Header62 } from '@/components/sections/shortHeader';
import React from 'react';

function Page() {
//   add a button above the table to download the google sheet as pdf
//   const downloadUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=pdf`;
//  get the spreadsheet id from env
const sheetID = process.env.SPREADSHEET_ID
const downloadUrl = `https://docs.google.com/spreadsheets/d/${sheetID}/export?format=pdf`
  return (
    <div className="flex flex-col items-center justify-center h-full pt0 w-full  ">
      <Header62 
      heading="Products" 
      description="Explore our wide range of products and find the perfect solution for your needs."
      tagline="We offer a wide range of products to meet your needs."
      bgSrc = "/pillsinbowlsgreenbg.jpg"
      // buttons = {[
      //   {
      //     title: "Get A quote",
      //     variant: "primary",
      //   },
      //   {
      //     title: "Contact Us",
      //     variant: "secondary",
      //   },
      // ]}

      />

      <div className="py-20 px-6 md:px-10 lg:px-16 w-full h-full">
       <form action={downloadUrl} method="post">
        <Button title="Download Product List" variant="primary" />
       </form>
        <ProductsTable />
      </div>
    </div>
  );
}

export default Page;