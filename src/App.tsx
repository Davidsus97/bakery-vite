import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const [items, setItems] = useState([
	{ itemName: 'item 1', quantity: 1, isSelected: false },
	{ itemName: 'item 2', quantity: 3, isSelected: true },
	{ itemName: 'item 3', quantity: 2, isSelected: false },
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='item-list'>
      	{items.map((item, index) => (
		<div className='item-container'>
			<div className='item-name'>
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
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<span> {item.quantity} </span>
				<button>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>
		</div>
	))}
</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
