import React, { useEffect, useState } from 'react';
import { Button, TextBox } from "devextreme-react/text-box";
import List, { ItemDragging } from 'devextreme-react/list';;


const BulletListEditor = (props) => {
    // console.log(props);
    useEffect(() => {
        setList(props?.data?.data[props?.data?.item?.dataField] || []);
    }, [])
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    const addButton = {
        text: 'اضف',
        onClick: () => {
            if (input.length) {
                setList([...list, input]);
                props.data.setValue([...list, input]);
                setInput('');
            }

        }
    }

    const onReorder = (e) => {
        console.log(e)
        let oldList = [...list];
        let item = oldList.splice(e.fromIndex,1);
        setList([...oldList.slice(0,e.toIndex),...item, ...oldList.slice(e.toIndex)]);
        props.data.setValue([...oldList.slice(0,e.toIndex),...item, ...oldList.slice(e.toIndex)]);
    }

    return (
        <>
            <TextBox onValueChanged={(e) => setInput(e.value)} value={input}>
                <Button
                    name="Add"
                    location="after"
                    options={addButton}
                />
            </TextBox>
            <List
                rtlEnabled
                noDataText={'No Data'}
                className='mt-2'
                items={list}
                height={'auto'}
                allowItemDeleting
                itemDeleteMode='static'
                onItemDeleted={(e) => {
                    setList([...list])
                    props.data.setValue([...list]);
                }}
            >
                <ItemDragging
                    allowReordering={true}
                    onReorder={onReorder}>
                </ItemDragging>
            </List>
        </>
    );
};

export default BulletListEditor;