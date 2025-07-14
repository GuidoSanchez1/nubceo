import type { Ticket } from "../../types/ticket";


export const mockTickets: Ticket[] = [
    {
        id: '1',
        customerName: 'John Doe',
        subject: 'Issue with product',
        status: 'open',
        createdAt: '2025-05-12T12:00:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I am having an issue with the product I purchased.',
                createdAt: '2025-05-12T12:00:00Z',
                fromCustomer: true
            },
            {
                id: 'msg2',
                content: 'Can you please provide more details?',
                createdAt: '2025-05-12T12:05:00Z',
                fromCustomer: false
            }
        ]
    },
    {
        id: '2',
        customerName: 'Jane Smith',
        subject: 'Billing question',
        status: 'closed',
        createdAt: '2025-06-11T14:00:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I have a question about my last bill.',
                createdAt: '2025-06-11T14:00:00Z',
                fromCustomer: true
            },
            {
                id: 'msg2',
                content: 'Your billing issue has been resolved.',
                createdAt: '2025-06-11T14:15:00Z',
                fromCustomer: false
            }
        ]

    },
    {
        id: '3',
        customerName: 'Alice Johnson',
        subject: 'Feedback on service',
        status: 'open',
        createdAt: '2025-06-17T09:00:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I would like to provide feedback on your service.',
                createdAt: '2025-06-17T09:00:00Z',
                fromCustomer: true
            },
            {
                id: 'msg2',
                content: 'Thank you for your feedback!',
                createdAt: '2025-06-17T09:05:00Z',
                fromCustomer: false
            }
        ]
    },
    {
        id: '4',
        customerName: 'Bob Brown',
        subject: 'Technical support needed',
        status: 'open',
        createdAt: '2025-06-17T11:00:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I need technical support for my device.',
                createdAt: '2025-06-17T11:00:00Z',
                fromCustomer: true
            },
            {
                id: 'msg2',
                content: 'Please provide the model number of your device.',
                createdAt: '2025-06-17T11:10:00Z',
                fromCustomer: false
            }
        ]
    },
    {
        id: '5',
        customerName: 'Charlie Green',
        subject: 'Order status inquiry',
        status: 'closed',
        createdAt: '2025-06-26T08:00:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'What is the status of my order?',
                createdAt: '2025-06-26T08:00:00Z',
                fromCustomer: true
            },
            {
                id: 'msg2',
                content: 'Your order has been shipped.',
                createdAt: '2025-06-26T08:20:00Z',
                fromCustomer: false
            }
        ]
    },
    {
        id: '6',
        customerName: 'Diana Prince',
        subject: 'Account login issue',
        status: 'open',
        createdAt: '2025-06-29T10:30:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I cannot log into my account with my usual credentials.',
                createdAt: '2025-06-29T10:30:00Z',
                fromCustomer: true
            },
            {
                id: 'msg2',
                content: 'Have you tried resetting your password?',
                createdAt: '2025-06-29T10:45:00Z',
                fromCustomer: false
            }
        ]
    },
    {
        id: '7',
        customerName: 'Ethan Hunt',
        subject: 'Refund request',
        status: 'closed',
        createdAt: '2025-06-30T13:00:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I would like to request a refund for my recent purchase.',
                createdAt: '2025-06-30T13:00:00Z',
                fromCustomer: true
            },
            {
                id: 'msg2',
                content: 'Your refund has been processed successfully.',
                createdAt: '2025-06-30T13:30:00Z',
                fromCustomer: false
            }
        ]
    },
    {
        id: '8',
        customerName: 'Fiona Gallagher',
        subject: 'App crashing on startup',
        status: 'open',
        createdAt: '2025-07-10T07:50:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'The app crashes every time I try to open it.',
                createdAt: '2025-07-10T07:50:00Z',
                fromCustomer: true
            },
            {
                id: 'msg2',
                content: 'Please let us know your OS version and device model.',
                createdAt: '2025-07-10T08:00:00Z',
                fromCustomer: false
            },
            {
                id: 'msg3',
                content: 'The app crashes every time I try to open it.',
                createdAt: '2025-07-10T07:50:00Z',
                fromCustomer: true
            },
            {
                id: 'msg4',
                content: 'Please let us know your OS version and device model.',
                createdAt: '2025-07-10T08:00:00Z',
                fromCustomer: false
            },
            {
                id: 'msg5',
                content: 'The app crashes every time I try to open it.',
                createdAt: '2025-07-10T07:50:00Z',
                fromCustomer: true
            },
            {
                id: 'msg6',
                content: 'Please let us know your OS version and device model.',
                createdAt: '2025-07-10T08:00:00Z',
                fromCustomer: false
            },
            {
                id: 'msg7',
                content: 'The app crashes every time I try to open it. The app crashes every time I try to open it.The app crashes every time I try to open it.The app crashes every time I try to open it.The app crashes every time I try to open it.The app crashes every time I try to open it.',
                createdAt: '2025-07-10T07:50:00Z',
                fromCustomer: true
            },
            {
                id: 'msg8',
                content: 'Please let us know your OS version and device model.',
                createdAt: '2025-07-10T08:00:00Z',
                fromCustomer: false
            },

        ]
    },
    {
        id: '9',
        customerName: 'George Lucas',
        subject: 'Change email address',
        status: 'closed',
        createdAt: '2025-07-11T16:10:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I need to update my email address on file.',
                createdAt: '2025-07-11T16:10:00Z',
                fromCustomer: true
            },
            {
                id: 'msg2',
                content: 'Your email has been updated successfully.',
                createdAt: '2025-07-11T16:25:00Z',
                fromCustomer: false
            }
        ]
    },
    {
        id: '10',
        customerName: 'Helen Mirren',
        subject: 'Feature request',
        status: 'open',
        createdAt: '2025-07-12T19:00:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I would love to see a dark mode feature.',
                createdAt: '2025-07-12T19:00:00Z',
                fromCustomer: true
            },
            {
                id: 'msg2',
                content: 'Thanks for the suggestion! We’ve forwarded it to our product team.',
                createdAt: '2025-07-12T19:15:00Z',
                fromCustomer: false
            }
        ]
    }
]