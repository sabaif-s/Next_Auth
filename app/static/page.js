import React from 'react';
import data from './Data.json'; // Import static data directly

export default function StaticPage() {
     
  
  return (
    <div>
      <h1>Static Page with Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
