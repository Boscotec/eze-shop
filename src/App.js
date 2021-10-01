import { ProductList } from './components/productList';
import { observer } from "mobx-react-lite"
import { useEffect } from 'react';
import SkeletonCard from './components/skeleton';

const App = observer(({ store }) => {
  
    useEffect(() => {
      store.loadProducts()
    }, [store])

    return (
        <div className="App">
            <header className="App-header"/>

            {!store.products.length ? (
                <SkeletonCard />
            ) : (
              <ProductList
                  data={store.products}
                  size={{ width: '115px', height: '98px' }}
              />
            )}
        </div>
    );
})

export default App;