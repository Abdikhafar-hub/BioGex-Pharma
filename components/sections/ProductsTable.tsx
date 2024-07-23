'use client'
import React, { useEffect, useState } from 'react';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/api/fetchProducts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const fetchedProducts = await response.json();
        setProducts(fetchedProducts);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        {/* <h1 className="text-2xl font-bold text-center mb-10">Products</h1> */}
        <div className="overflow-x-auto rounded-lg border border-b-0 border-slate-300">
          <table className="min-w-full bg-white overflow-y-auto">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-4 border-b">Number</th>
                <th className="px-4 py-4 border-b text-start font-medium">Product</th>
                {/* <th className="px-4 py-4 border-b text-start font-medium">Description</th> */}
                <th className="px-4 py-4 border-b text-start font-medium">Price(KSh)</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5}).map((_, index) => (
                <tr key={index} className={`${index % 2 === 0 && 'bg-slate-50'}`}>
                  <td className="px-4 py-4 border-b">
                    <div className="animate-pulse h-8 bg-slate-300/50 rounded"></div>
                  </td>
                  <td className="px-4 py-4 border-b">
                    <div className="animate-pulse h-8 bg-slate-300/50 rounded"></div>
                  </td>
                  {/* <td className="px-4 py-4 border-b">
                    <div className="animate-pulse h-8 bg-slate-300/50 rounded"></div>
                  </td> */}
                  <td className="px-4 py-4 border-b">
                    <div className="animate-pulse h-8 bg-slate-300/50 rounded"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      {/* <h1 className="text-2xl font-bold text-center mb-10">Products</h1> */}
      <div className="overflow-x-scroll rounded-lg border border-slate-300">
        <table className="min-w-full bg-white overflow-y-auto">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-2 border-b">No.</th>
              <th className="px-4 py-2 border-b text-start font-medium">Product</th>
              {/* <th className="px-4 py-2 border-b">Description</th> */}
              <th className="px-4 py-2 border-b text-start font-medium">Price(KSh)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className={`${product?.number % 2 === 0 && 'bg-slate-50'}`}>
                <td className="px-2 py-2 border-b">{product.number}</td>
                <td className="px-4 py-2 border-b flex flex-col ">
                  <span className='text-slate-600 text-sm md:text-base font-semibold'>{product.product}</span>
                  <span className='text-xs md:text-sm text-slate-500'>{product.description}</span>
                  
                </td>
                {/* <td className="px-4 py-2 border-b">{product.description}</td> */}
                <td className="px-4 py-2 border-b text-slate-600 font-semibold">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;