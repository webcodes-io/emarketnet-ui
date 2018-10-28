import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
 {
    path: '',
    component: CreateProductComponent
 },
 {
    path: 'create-product',
    component: CreateProductComponent
 }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
