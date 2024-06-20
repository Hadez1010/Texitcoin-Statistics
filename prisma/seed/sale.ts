import { Prisma } from '@prisma/client';
import { STATISTICS, USERS } from '../consts';

export const saleData: Prisma.SaleCreateManyInput[] = [
  {
    invoiceNo: 1,
    userId: USERS[0],
    statisticsId: STATISTICS[0],
    productName: 'Free Share - 500mh/s Power',
    paymentMethod: 'Free_package',
    amount: 0,
    hashPower: 500,
    issuedAt: new Date('2024-06-13'),
    createdAt: new Date('2024-06-13'),
  },
  {
    invoiceNo: 2,
    userId: USERS[0],
    statisticsId: STATISTICS[1],
    productName: '(1) Share - 500mh/s Power',
    paymentMethod: 'Free',
    amount: 995,
    hashPower: 500,
    issuedAt: new Date('2024-06-14'),
    createdAt: new Date('2024-06-14'),
  },
  {
    invoiceNo: 3,
    userId: USERS[0],
    statisticsId: STATISTICS[2],
    productName: '(2) Share - 1000mh/s Power',
    paymentMethod: 'Register_from_admin',
    amount: 1990,
    hashPower: 1000,
    issuedAt: new Date('2024-06-15'),
    createdAt: new Date('2024-06-15'),
  },
  {
    invoiceNo: 4,
    userId: USERS[0],
    statisticsId: STATISTICS[3],
    productName: '(3) Share - 1500mh/s Power',
    paymentMethod: 'Register_from_admin',
    amount: 2985,
    hashPower: 1500,
    issuedAt: new Date('2024-06-16'),
    createdAt: new Date('2024-06-16'),
  },
  {
    invoiceNo: 5,
    userId: USERS[1],
    statisticsId: STATISTICS[0],
    productName: 'Free Share - 500mh/s Power',
    paymentMethod: 'Free_package',
    amount: 0,
    hashPower: 500,
    issuedAt: new Date('2024-06-13'),
    createdAt: new Date('2024-06-13'),
  },
  {
    invoiceNo: 6,
    userId: USERS[1],
    statisticsId: STATISTICS[1],
    productName: '(1) Share - 500mh/s Power',
    paymentMethod: 'Free',
    amount: 995,
    hashPower: 500,
    issuedAt: new Date('2024-06-14'),
    createdAt: new Date('2024-06-14'),
  },
  {
    invoiceNo: 7,
    userId: USERS[1],
    statisticsId: STATISTICS[2],
    productName: '(2) Share - 1000mh/s Power',
    paymentMethod: 'Register_from_admin',
    amount: 1990,
    hashPower: 1000,
    issuedAt: new Date('2024-06-15'),
    createdAt: new Date('2024-06-15'),
  },
  {
    invoiceNo: 8,
    userId: USERS[1],
    statisticsId: STATISTICS[3],
    productName: '(3) Share - 1500mh/s Power',
    paymentMethod: 'Register_from_admin',
    amount: 2985,
    hashPower: 1500,
    issuedAt: new Date('2024-06-16'),
    createdAt: new Date('2024-06-16'),
  },
];
