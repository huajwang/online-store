import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EmallProductModule } from './product/product.module';
import { EmallProductCategoryModule } from './product-category/product-category.module';
import { EmallCustomerModule } from './customer/customer.module';
import { EmallProductOrderModule } from './product-order/product-order.module';
import { EmallOrderItemModule } from './order-item/order-item.module';
import { EmallInvoiceModule } from './invoice/invoice.module';
import { EmallShipmentModule } from './shipment/shipment.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        EmallProductModule,
        EmallProductCategoryModule,
        EmallCustomerModule,
        EmallProductOrderModule,
        EmallOrderItemModule,
        EmallInvoiceModule,
        EmallShipmentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmallEntityModule {}
