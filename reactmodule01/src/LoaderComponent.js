import { Card, Loader, CardHeader, FlexBox, Text, Icon, Table, TableColumn, Label, TableCell, TableRow } from '@ui5/webcomponents-react';
import React, { useState, useEffect } from 'react';
import "@ui5/webcomponents-icons/dist/AllIcons.js";


const LoaderComponent = () => {
    const initialText =
        'This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.';
    const sampleData = [
        {
            "ProductID": 0,
            "ProductName": "Bread",
            "Description": "Whole grain bread",
            "ReleaseDate": "1992-01-01T00:00:00",
            "DiscontinuedDate": null,
            "UnitsInStock": 4,
            "UnitPrice": 2.5
        },
        {
            "ProductID": 1,
            "ProductName": "Milk",
            "Description": "Low fat milk",
            "ReleaseDate": "1995-10-01T00:00:00",
            "DiscontinuedDate": null,
            "UnitsInStock": 3,
            "UnitPrice": 3.5
        },
        {
            "ProductID": 2,
            "ProductName": "Vint soda",
            "Description": "Americana Variety - Mix of 6 flavors",
            "ReleaseDate": "2000-10-01T00:00:00",
            "DiscontinuedDate": null,
            "UnitsInStock": 3,
            "UnitPrice": 20.9
        },
        {
            "ProductID": 3,
            "ProductName": "Havina Cola",
            "Description": "The Original Key Lime Cola",
            "ReleaseDate": "2005-10-01T00:00:00",
            "DiscontinuedDate": "2006-10-01T00:00:00",
            "UnitsInStock": 3,
            "UnitPrice": 19.9
        }];
    const [text, setText] = useState(initialText);
    const [loading, setLoading] = useState(false);
    var empty = [];
    const [data, setData] = useState(empty);
    const onHeaderClick = () => {
        setLoading(true);
        // setTheme('sap_horizon');
    };
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                //setText((prev) => (prev === initialText ? 'Updated (⌐■_■)' : initialText));
                setData(sampleData);
                setLoading(false);
            }, 5000);
        }
    }, [loading]);
    return (
        <Card
            header={
                <CardHeader
                    titleText="Click here to update the table below."
                    interactive
                    avatar={<Icon name="activate" />}
                    onClick={onHeaderClick}
                />
            }
            style={{ width: '1200px' }}
        >
            <FlexBox direction="Column">
                {loading && <Loader />}
                {/* <Text style={{}}>{text}</Text> */}
                <Table
                    columns={<><TableColumn style={{ width: '12rem' }}>
                        <Label>Product ID</Label></TableColumn><TableColumn minWidth={800}>
                        <Label>Product Name</Label></TableColumn><TableColumn demandPopin minWidth={600}>
                        <Label>Unit Price</Label></TableColumn><TableColumn demandPopin minWidth={600} >
                        <Label>Units In Stock</Label></TableColumn></>}
                    onLoadMore={function noRefCheck() { }}
                    onPopinChange={function noRefCheck() { }}
                    onRowClick={function noRefCheck() { }}
                    onSelectionChange={function noRefCheck() { }}
                >
                    {data.map(function (value) {
                        return (
                            <TableRow>
                                <TableCell>{value.ProductID}</TableCell>
                                <TableCell>{value.ProductName}</TableCell>
                                <TableCell>{value.UnitPrice}</TableCell>
                                <TableCell>{value.UnitsInStock}</TableCell>
                            </TableRow>
                        );
                    })}
                </Table>
            </FlexBox>
            {/* <FlexBox>
          {loading && <Loader />}
          <Text>{text}</Text>
        </FlexBox> */}
        </Card>
    );
};
export default LoaderComponent;