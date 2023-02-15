/** import { IncomingMessage } from "http"; */

export const environment = {
  production: false,
  orderData: {

    
      vanne: {
        images: ['vanne.jpg'],
      },
      grandTotal: 87,
      products: [
        {
          images: ['apple.jpg'],
          name: 'Apple',
          offer: 10,
          salePrice: 2.7,
          regularPrice: 3,
          units: 10
        },
        {
          images: ['biryani.jpg'],
          name: 'Biryani',
          offer: 20,
          salePrice: 12,
          regularPrice: 15,
          units: 5
        }
      ],
      status: 'Delivered',
      delivery_status: 'Unassigned',
      createdAt: 'Nov 3, 2020 3:49 PM'
    }
};
