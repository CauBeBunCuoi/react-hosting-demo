
export default function InvoiceList() {
    return (
        [
            {
                id: 1,
                name: 'Invoice 1',
                payment: 'cash',
                total: 100,
                customer: { id: 1, name: 'Customer 1' }
            },
            {
                id: 2,
                name: 'Invoice 2',
                payment: 'cash',
                total: 200,
                customer: { id: 1, name: 'Customer 1' }
            },
            {
                id: 3,

                name: 'Invoice 3',
                payment: 'paypal',
                total: 300,
                customer: { id: 2, name: 'Customer 2' }
            }
        ]
    );
}
