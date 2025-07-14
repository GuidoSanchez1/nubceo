import type { Ticket } from "../../types/ticket";

export const mockTickets: Ticket[] = [
    {
        id: '1',
        customerName: 'John Doe',
        subject: 'Problema con el producto',
        status: 'open',
        createdAt: '2025-05-12T12:00:00Z',
        messages: [
            {
                id: 'msg2',
                content: 'Se solicitó más información al cliente para poder identificar el problema con el producto.',
                createdAt: '2025-05-12T12:05:00Z',
            }
        ]
    },
    {
        id: '2',
        customerName: 'Jane Smith',
        subject: 'Consulta de facturación',
        status: 'closed',
        createdAt: '2025-06-11T14:00:00Z',
        messages: [
            {
                id: 'msg2',
                content: 'El problema de facturación fue revisado y corregido satisfactoriamente.',
                createdAt: '2025-06-11T14:15:00Z',
            }
        ]
    },
    {
        id: '3',
        customerName: 'Alice Johnson',
        subject: 'Comentarios sobre el servicio',
        status: 'open',
        createdAt: '2025-06-17T09:00:00Z',
        messages: [
            {
                id: 'msg2',
                content: 'Se agradeció al cliente por su retroalimentación y se documentaron los comentarios.',
                createdAt: '2025-06-17T09:05:00Z',
            }
        ]
    },
    {
        id: '4',
        customerName: 'Bob Brown',
        subject: 'Soporte técnico necesario',
        status: 'open',
        createdAt: '2025-06-17T11:00:00Z',
        messages: [
            {
                id: 'msg2',
                content: 'Se solicitó al cliente el número de modelo del dispositivo para poder brindar soporte técnico adecuado.',
                createdAt: '2025-06-17T11:10:00Z',
            }
        ]
    },
    {
        id: '5',
        customerName: 'Charlie Green',
        subject: 'Consulta sobre el estado del pedido',
        status: 'closed',
        createdAt: '2025-06-26T08:00:00Z',
        messages: [
            {
                id: 'msg2',
                content: 'Se confirmó que el pedido del cliente ya había sido enviado.',
                createdAt: '2025-06-26T08:20:00Z',
            }
        ]
    },
    {
        id: '6',
        customerName: 'Diana Prince',
        subject: 'Problema para iniciar sesión en la cuenta',
        status: 'open',
        createdAt: '2025-06-29T10:30:00Z',
        messages: [
            {
                id: 'msg2',
                content: 'Se sugirió al cliente intentar restablecer su contraseña para resolver el problema de acceso.',
                createdAt: '2025-06-29T10:45:00Z',
            }
        ]
    },
    {
        id: '7',
        customerName: 'Ethan Hunt',
        subject: 'Solicitud de reembolso',
        status: 'closed',
        createdAt: '2025-06-30T13:00:00Z',
        messages: [
            {
                id: 'msg2',
                content: 'Se procesó correctamente el reembolso solicitado por el cliente.',
                createdAt: '2025-06-30T13:30:00Z',
            }
        ]
    },
    {
        id: '8',
        customerName: 'Fiona Gallagher',
        subject: 'La app se cierra al iniciar',
        status: 'open',
        createdAt: '2025-07-10T07:50:00Z',
        messages: [
            {
                id: 'msg2',
                content: 'Se pidió al cliente que informara la versión del sistema operativo y el modelo del dispositivo para investigar el fallo.',
                createdAt: '2025-07-10T08:00:00Z',
            },
            {
                id: 'msg4',
                content: 'Se reiteró la solicitud de datos técnicos debido a mensajes repetidos del cliente.',
                createdAt: '2025-07-10T08:00:00Z',
            },
            {
                id: 'msg6',
                content: 'Se volvió a solicitar la información técnica por tercera vez sin respuesta clara.',
                createdAt: '2025-07-10T08:00:00Z',
            },
            {
                id: 'msg8',
                content: 'Se reiteró la necesidad de recibir los datos técnicos para poder escalar el caso al equipo correspondiente.',
                createdAt: '2025-07-10T08:00:00Z',
            }
        ]
    },
    {
        id: '9',
        customerName: 'George Lucas',
        subject: 'Cambiar dirección de correo electrónico',
        status: 'closed',
        createdAt: '2025-07-11T16:10:00Z',
        messages: [
            {
                id: 'msg2',
                content: 'Se actualizó exitosamente la dirección de correo electrónico del cliente en el sistema.',
                createdAt: '2025-07-11T16:25:00Z',
            }
        ]
    },
    {
        id: '10',
        customerName: 'Helen Mirren',
        subject: 'Solicitud de funcionalidad',
        status: 'open',
        createdAt: '2025-07-12T19:00:00Z',
        messages: [
            {
                id: 'msg2',
                content: 'Se registró la sugerencia del cliente sobre el modo oscuro y fue enviada al equipo de producto.',
                createdAt: '2025-07-12T19:15:00Z',
            }
        ]
    }
]
