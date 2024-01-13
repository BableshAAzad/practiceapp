import React, { useState } from 'react';

const CrudComponent = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ]);

    const [newItem, setNewItem] = useState('');
    const [editingItem, setEditingItem] = useState(null);

    const addNewUser = () => {
        if (newItem.trim() !== '') {
            setData([...data, { id: data.length + 1, name: newItem }]);
            setNewItem('');
        }
    };

    const handleEditItem = (id) => {
        const itemToEdit = data.find((item) => item.id === id);
        setEditingItem(itemToEdit);
    };

    const handleUpdateItem = () => {
        if (editingItem.name.trim() !== '') {
            const updatedData = data.map((item) =>
                item.id === editingItem.id ? { ...item, name: editingItem.name } : item
            );
            setData(updatedData);
            setEditingItem(null);
        }
    };

    const handleDeleteItem = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };

    return (
        <div>
            <h2>CRUD Component</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {editingItem && editingItem.id === item.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editingItem.name}
                                    onChange={(e) =>
                                        setEditingItem({ ...editingItem, name: e.target.value })
                                    }
                                />
                                <button onClick={handleUpdateItem}>Update</button>
                            </div>
                        ) : (
                            <div>
                                {item.name}
                                <button onClick={() => handleEditItem(item.id)}>Edit</button>
                                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="New item name"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={addNewUser}>Add</button>
            </div>
        </div>
    );
};

export default CrudComponent;
