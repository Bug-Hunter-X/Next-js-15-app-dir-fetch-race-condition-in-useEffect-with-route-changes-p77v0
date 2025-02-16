```javascript
import { useEffect, useState } from 'react';

function MyComponent({ params }) {
  const [data, setData] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    // Create a new AbortController for each request
    const newController = new AbortController();
    setController(newController);

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data?id=${params.id}`, {
          signal: newController.signal,
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    // Clean up the previous controller when the component unmounts or params change
    return () => newController.abort();
  }, [params.id]);

  // ... rest of the component
}

```