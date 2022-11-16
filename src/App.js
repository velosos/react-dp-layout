import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { RegularList } from './RegularList';
import { NumberedList } from './NumberedList';
import { SplitScreen } from './SplitScreen';
import { people, products } from './store/data';
import { LargeProductListItem } from './products/LargeProductListItem';
import { Modal } from './Modal';

function App() {
  return (
    <>
      <SplitScreen
        leftWeight={1}
        rightWeight={3} >
        <NumberedList
          items={products}
          resourceName="product"
          itemComponent={LargeProductListItem} />
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={LargePersonListItem} />
      </SplitScreen>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
}

export default App;
