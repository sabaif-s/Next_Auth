import React from 'react';
import data from './Data.json'; // Import static data directly

export default function StaticPage() {
     
  
  return (
    <span className='text-sm text-gray-500'>
    {data.leftData.smallContent}
 </span>
  );
}
