import React, { useEffect, useState } from 'react';
import HtmlEditor, { Toolbar, Item, MediaResizing } from 'devextreme-react/html-editor';

const HtmlEditorComponent = (props) => {

    return (
        <>
            <HtmlEditor
                height={500}
                valueType='html'
                defaultValue={props.data.value}
                onValueChange={HTMLFile => props.data.setValue(HTMLFile)}
            >
                <MediaResizing enabled={true} />
                <Toolbar multiline={true}>
                    <Item formatName="undo" />
                    <Item formatName="redo" />
                    <Item formatName="separator" />
                    {/* <Item formatName="size" formatValues={['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt']} /> */}
                    <Item formatName="font" formatValues={['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana']} />
                    <Item formatName="separator" />
                    <Item formatName="bold" />
                    <Item formatName="italic" />
                    <Item formatName="strike" />
                    <Item formatName="underline" />
                    <Item formatName="separator" />
                    <Item formatName="alignLeft" />
                    <Item formatName="alignCenter" />
                    <Item formatName="alignRight" />
                    <Item formatName="alignJustify" />
                    <Item formatName="separator" />
                    <Item formatName="orderedList" />
                    <Item formatName="bulletList" />
                    <Item formatName="separator" />
                    <Item formatName="header" formatValues={[false, 1, 2, 3, 4, 5]} />
                    <Item formatName="separator" />
                    <Item formatName="color" />
                    <Item formatName="background" />
                    <Item formatName="separator" />
                    <Item formatName="link" />
                    <Item formatName="image" />
                    <Item formatName="separator" />
                    <Item formatName="clear" />
                    <Item formatName="codeBlock" />
                    <Item formatName="blockquote" />
                    <Item formatName="separator" />
                    <Item formatName="insertTable" />
                    <Item formatName="deleteTable" />
                    <Item formatName="insertRowAbove" />
                    <Item formatName="insertRowBelow" />
                    <Item formatName="deleteRow" />
                    <Item formatName="insertColumnLeft" />
                    <Item formatName="insertColumnRight" />
                    <Item formatName="deleteColumn" />
                </Toolbar>
            </HtmlEditor>
        </>
    );
};

export default HtmlEditorComponent;