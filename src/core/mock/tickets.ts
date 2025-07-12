import type { Ticket } from "../types/ticket";


export const mockTickets: Ticket[] = [
    {
        id: '1',
        customerName: 'John Doe',
        subject: 'Issue with product',
        status: 'open',
        messages: [
            {
                id: 'msg1',
                content: 'I am having an issue with the product I purchased.',
                createdAt: '2023-10-01T12:00:00Z'
            },
            {
                id: 'msg2',
                content: 'Can you please provide more details?',
                createdAt: '2023-10-01T12:05:00Z'
            }
        ]
    },
    {
        id: '2',
        customerName: 'Jane Smith',
        subject: 'Billing question',
        status: 'closed',
        messages: [
            {
                id: 'msg1',
                content: 'I have a question about my last bill.',
                createdAt: '2023-10-02T14:00:00Z'
            },
            {
                id: 'msg2',
                content: 'Your billing issue has been resolved.',
                createdAt: '2023-10-02T14:15:00Z'
            }
        ]

    },
    {
        id: '3',
        customerName: 'Alice Johnson',
        subject: 'Feedback on service',
        status: 'open',
        messages: [
            {
                id: 'msg1',
                content: 'I would like to provide feedback on your service.',
                createdAt: '2023-10-03T09:00:00Z'
            },
            {
                id: 'msg2',
                content: 'Thank you for your feedback!',
                createdAt: '2023-10-03T09:05:00Z'
            }
        ]
    },
    {
        id: '4',
        customerName: 'Bob Brown',
        subject: 'Technical support needed',
        status: 'open',
        messages: [
            {
                id: 'msg1',
                content: 'I need technical support for my device.',
                createdAt: '2023-10-04T11:00:00Z'
            },
            {
                id: 'msg2',
                content: 'Please provide the model number of your device.',
                createdAt: '2023-10-04T11:10:00Z'
            }
        ]
    },
    {
        id: '5',
        customerName: 'Charlie Green',
        subject: 'Order status inquiry',
        status: 'closed',
        messages: [
            {
                id: 'msg1',
                content: 'What is the status of my order?',
                createdAt: '2023-10-05T08:00:00Z'
            },
            {
                id: 'msg2',
                content: 'Your order has been shipped.',
                createdAt: '2023-10-05T08:20:00Z'
            }
        ]
    }

]