import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AccountingJournalsService } from './api/accountingJournals.service';
import { AccountsService } from './api/accounts.service';
import { ActivitiesService } from './api/activities.service';
import { BankAccountsService } from './api/bankAccounts.service';
import { CatalogsService } from './api/catalogs.service';
import { ClientsService } from './api/clients.service';
import { CommentsService } from './api/comments.service';
import { InventoryService } from './api/inventory.service';
import { InvoicesService } from './api/invoices.service';
import { OrdersService } from './api/orders.service';
import { ProductsService } from './api/products.service';
import { ProspectsService } from './api/prospects.service';
import { ProvidersService } from './api/providers.service';
import { ServicesService } from './api/services.service';
import { WarehousesService } from './api/warehouses.service';
import { WebHooksService } from './api/webHooks.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AccountingJournalsService,
    AccountsService,
    ActivitiesService,
    BankAccountsService,
    CatalogsService,
    ClientsService,
    CommentsService,
    InventoryService,
    InvoicesService,
    OrdersService,
    ProductsService,
    ProspectsService,
    ProvidersService,
    ServicesService,
    WarehousesService,
    WebHooksService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
