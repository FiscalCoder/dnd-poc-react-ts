import { useState, useEffect } from "react";
import { Spin, message } from "antd";
import CardGrid from "./components/CardGrid";
import { getCats } from "./api/catGifs";
import { Cat } from "./types/cat";

export default function App(): JSX.Element {
  const [items, setItems] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getCats()
      .then((cats) => setItems(cats) )
      .catch((error) => {
        message.error("Failed to load cats. Please try again later.");
        console.error(error);
      })
      .finally(() => setLoading(false));

  }, []);

  if (loading) {
    return (
      <div className="spinner-container" aria-live="polite">
        <Spin size="large" />
        <p>Loading cats...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <CardGrid items={items} onItemsChange={setItems} /> 
    </div>
  );
}