import React from 'react';
import './Viewtodo.css';

const Viewtodo = (props) => {
    const {items, deleteItem} = props;
    let itemsNumber = items.length 
    const item = itemsNumber>0 ? items.map(item => {
        return (
            <div key={item.id} id='div-table'>
                <table>
                    <tbody>
                        <tr>
                            <td className='name'><span>{item.name}</span></td>
                            <td className='date'><span>{item.date}</span></td>
                            <td className='action delete'><span onClick={() => deleteItem(item.id)} style={{ color: 'red' }}>&times;</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ) 
    }) : (<h2>Add your todo list here</h2>)

    return (
        <div className='view-items'>
            <div>
                <span className='name header'>Name</span>
                <span className='date header'>Date</span>
                <span className='action header D_header'>Delete</span>
            </div>
            {item}
        </div>
    )
}

export default Viewtodo