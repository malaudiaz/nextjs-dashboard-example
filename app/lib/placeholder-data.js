// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const products = [
  {
    id: "91f84edf-3dfc-4587-98e7-0ca0ef5200a0",
    name: "Blusa de Jovencita",
    description: "Blusa de seda para jovencita, con diseño moderno y colores agradables",
    color: "BEIGE",
    price: 3.78,
    stock: 18,
    image_url: '/products/blusa_de_jovencita.png',
  },
  {
    id: "c203cb8c-9fd9-4651-9e95-ba8fbf60fafa",
    name: "Calzado deportivo",
    description: "Calzado deportivo Adidas para hombres",
    color: "BLANCO",
    price: 83.69,
    stock: 25,
    image_url: '/products/calzado_deportivo_adidas.png',
  },
  {
    id: "1669a6d1-7881-4a55-8248-2bfd24191657",
    name: "Calzado deportivo",
    description: "Calzado deportivo Nike para hombres",
    color: "BLANCO/ROJO",
    price: 88.99,
    stock: 30,
    image_url: '/products/calzado_deportivo_nke.png',
  },
  {
    id: "d621c083-7a22-4baf-8eb8-21c0da33c8a7",
    name: "Calzado deportivo",
    description: "Calzado deportivo Reebook para hombres",
    color: "BLANCO/VERDE",
    price: 88.99,
    stock: 30,
    image_url: '/products/calzado_sport_reebook.png',
  },
  {
    id: "93573381-113e-4779-bc94-e7634f1dce15",
    name: "Camisa de Vestir",
    description: "Camisa de Vestir de Hilo",
    color: "BLANCO",
    price: 22.88,
    stock: 10,
    image_url: '/products/camisa_de_hombre.png',
  },
  {
    id: "6f9bd1bc-607a-4103-bee9-e3e73a5ac913",
    name: "Camisa y Corbata",
    description: "Camisa Elegante con Corbata a Juego",
    color: "BLANCO/AZUL",
    price: 18.75,
    stock: 10,
    image_url: '/products/camisa_y_corbata.png',
  },
  {
    id: "ffebf4e1-7642-416b-9db6-dcb33c0460da",
    name: "Corbatas",
    description: "Corbatas para todo tipo de ocaciones",
    color: "VARIOS",
    price: 8.60,
    stock: 15,
    image_url: '/products/corbatas.png',
  },
  {
    id: "fd791d2e-7b69-4cd9-ba03-d9ebc408c751",
    name: "Panatalones Deportivos",
    description: "Panatalones deportivos de Algodon",
    color: "VARIOS",
    price: 16.66,
    stock: 8,
    image_url: '/products/pantalon_deportivo_hombre.png',
  },
  {
    id: "a65e140b-ba18-42de-96a6-cad8dc3afdf2",
    name: "Pulover deportivos",
    description: "Pulover deportivo de algodon en varios colores",
    color: "VARIOS",
    price: 4.35,
    stock: 18,
    image_url: '/products/pulover_deportivos.png',
  },
  {
    id: "c2b23f5d-4bfd-4be6-b0bb-df8969c372d5",
    name: "Pulover de Hombre",
    description: "Pulover de Hombre de algodon con cuello",
    color: "BEIGE",
    price: 3.55,
    stock: 5,
    image_url: '/products/pulover_hobre_con_cuello.png',
  },
  {
    id: "030b4ff6-a265-462c-95d4-30bf631cc842",
    name: "Pulover de Hombre Elegante",
    description: "Pulover de Hombre de Hilo Tejido con cuello",
    color: "NEGRO",
    price: 6.15,
    stock: 8,
    image_url: '/products/pulover_hombre_elegante.png',
  },
]

const categories = [
  {
    id: "098e0c0d-c2d1-4691-bf83-aafe5159f17c",
    name: "Ropa de Jovencito",
    description: "Ropa moderna para jovenes"
  },
  {
    id: "63696ac1-c737-441b-8446-2ad575476f36",
    name: "Ropa de Mujer",
    description: ""
  },
  {
    id: "c623dd2b-4d93-4033-b026-7346bfb98a39",
    name: "Calzado de Hombres",
    description: ""
  }
]

module.exports = {
  users,
  customers,
  invoices,
  revenue,
  products,
  categories
};
