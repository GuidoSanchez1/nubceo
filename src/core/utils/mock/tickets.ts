import type { Ticket } from "../../types/ticket";


export const mockTickets: Ticket[] = [
    {
        id: '1',
        customerName: 'John Doe',
        subject: 'Issue with product',
        status: 'open',
        createdAt: '2023-10-01T12:00:00Z',
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
        createdAt: '2023-10-02T14:00:00Z',
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
        createdAt: '2023-10-03T09:00:00Z',
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
        createdAt: '2023-10-04T11:00:00Z',
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
        createdAt: '2023-10-05T08:00:00Z',
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
    },
    {
        id: '6',
        customerName: 'Diana Prince',
        subject: 'Account login issue',
        status: 'open',
        createdAt: '2023-10-06T10:30:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I cannot log into my account with my usual credentials.',
                createdAt: '2023-10-06T10:30:00Z'
            },
            {
                id: 'msg2',
                content: 'Have you tried resetting your password?',
                createdAt: '2023-10-06T10:45:00Z'
            }
        ]
    },
    {
        id: '7',
        customerName: 'Ethan Hunt',
        subject: 'Refund request',
        status: 'closed',
        createdAt: '2023-10-07T13:00:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I would like to request a refund for my recent purchase.',
                createdAt: '2023-10-07T13:00:00Z'
            },
            {
                id: 'msg2',
                content: 'Your refund has been processed successfully.',
                createdAt: '2023-10-07T13:30:00Z'
            }
        ]
    },
    {
        id: '8',
        customerName: 'Fiona Gallagher',
        subject: 'App crashing on startup',
        status: 'open',
        createdAt: '2023-10-08T07:50:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'The app crashes every time I try to open it.',
                createdAt: '2023-10-08T07:50:00Z'
            },
            {
                id: 'msg2',
                content: 'Please let us know your OS version and device model.',
                createdAt: '2023-10-08T08:00:00Z'
            }
        ]
    },
    {
        id: '9',
        customerName: 'George Lucas',
        subject: 'Change email address',
        status: 'closed',
        createdAt: '2023-10-09T16:10:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I need to update my email address on file.',
                createdAt: '2023-10-09T16:10:00Z'
            },
            {
                id: 'msg2',
                content: 'Your email has been updated successfully.',
                createdAt: '2023-10-09T16:25:00Z'
            }
        ]
    },
    {
        id: '10',
        customerName: 'Helen Mirren',
        subject: 'Feature request',
        status: 'open',
        createdAt: '2023-10-10T19:00:00Z',
        messages: [
            {
                id: 'msg1',
                content: 'I would love to see a dark mode feature.',
                createdAt: '2023-10-10T19:00:00Z'
            },
            {
                id: 'msg2',
                content: 'Thanks for the suggestion! We’ve forwarded it to our product team.',
                createdAt: '2023-10-10T19:15:00Z'
            }
        ]
    }
]