import { useState } from 'react';

export default function HomePage() {
  const [value, setValue] = useState(0);

  return (
    <button onClick={() => setValue(x => x + 1)}>
      {value}
    </button>
  )
}