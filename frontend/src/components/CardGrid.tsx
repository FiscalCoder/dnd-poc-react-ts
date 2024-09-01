import { useCallback } from "react";
import { Card, Image, Spin } from "antd";
import { GridContextProvider, GridDropZone, GridItem, swap } from "react-grid-dnd";
import { Cat } from "../types/cat";

const { Meta } = Card;

interface CardGridProps {
  items: Cat[];
  onItemsChange: (newItems: Cat[]) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ items, onItemsChange }) => {
  const handleChange = useCallback(
    (_sourceId: string, sourceIndex: number, targetIndex: number) => {
      onItemsChange(swap(items, sourceIndex, targetIndex));
    },
    [items, onItemsChange]
  );

  return (
    <GridContextProvider onChange={handleChange}>
      <GridDropZone
        id="items"
        boxesPerRow={3}
        rowHeight={280}
        style={{ height: `${280 * Math.ceil(items.length / 3)}px` }}
      >
        {items.map((item) => (
          <GridItem key={item.id}>
            <Card
              hoverable
              style={{ width: 240, margin: "0 16px 0" }}
              cover={
                <Image
                  alt={item.name}
                  height={140}
                  src={item.image}
                  placeholder={
                    <div className="centered-spinner" aria-hidden="true">
                      <Spin />
                    </div>
                  }
                  style={{
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  }}
                />
              }
            >
              <Meta title={item.name} description={item.description} />
            </Card>
          </GridItem>
        ))}
      </GridDropZone>
    </GridContextProvider>
  );
};

export default CardGrid;