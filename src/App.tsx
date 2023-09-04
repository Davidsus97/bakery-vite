import  { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faChevronRight, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 3, isSelected: true },
    { itemName: 'item 3', quantity: 2, isSelected: false },
  ]);

  const [totalItemCount, setTotalItemCount] = useState(6);
  const [inputValue, setInputValue] = useState('');

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  const handleQuantityIncrease = (index: number) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
    calculateTotal();
  };

  const toggleComplete = (index: number) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const handleQuantityDecrease = (index: number) => {
    const newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems);
    calculateTotal();
  };

  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue('');
    calculateTotal();
  };

  return (
    <>
      <div className='add-item-box'>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className='add-item-input'
          placeholder='Add an item...'
        />
        <FontAwesomeIcon icon={faPlus} onClick={handleAddButtonClick} />
      </div>

      <div className='item-list'>
        {items.map((item, index: number) => (
          <div className='item-container' key={index}>
            <div className='item-name' onClick={() => toggleComplete(index)}>
              {item.isSelected ? (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span className='completed'>{item.itemName}</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCircle} />
                  <span>{item.itemName}</span>
                </>
              )}
            </div>
            <div className='quantity'>
              <button>
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
              </button>
              <span> {item.quantity} </span>
              <button>
                <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
              </button>
            </div>
            <div className='total'>Total: {totalItemCount}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
