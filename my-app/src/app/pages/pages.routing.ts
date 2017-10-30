import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


export const PagesRoutes = [
  {
    path: '',
    data: {
      title: "Pages"
    },
    children: [
      {
      path: 'home',
      component: HomeComponent
      },
      {
      path: 'cart',
      component: CartComponent
      },
      {
      path: 'details/:id',
      component: ProductDetailsComponent
      }
    ]
  }

   /* {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent } */
];
