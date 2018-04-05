/**
 * Bind ERP API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { InvoiceDetailsProduct } from './invoiceDetailsProduct';
import { InvoiceDetailsService } from './invoiceDetailsService';


export interface InvoiceDetails {
    ID?: string;
    Series?: string;
    Number?: number;
    ClientID?: string;
    ClientName?: string;
    PaymentTerms?: number;
    Status?: string;
    StatusCode?: number;
    ClientPhoneNumber?: string;
    ClientContact?: string;
    RFC?: string;
    CreatedByID?: string;
    CreatedByName?: string;
    CreationDate?: Date;
    ApplicationDate?: Date;
    PriceListID?: string;
    PriceListName?: string;
    LocationID?: string;
    LocationName?: string;
    WarehouseID?: string;
    WarehouseName?: string;
    CFDIPaymentMethod?: string;
    CFDIPaymentTerm?: string;
    CFDIAccountNumber?: string;
    CurrencyName?: string;
    ExchangeRate?: number;
    PurchaseOrder?: string;
    FiscalID?: string;
    Address?: string;
    Comments?: string;
    Subtotal?: number;
    Discount?: number;
    VAT?: number;
    IEPS?: number;
    VATRet?: number;
    ISRRet?: number;
    Payments?: number;
    CreditNotes?: number;
    Products?: Array<InvoiceDetailsProduct>;
    Services?: Array<InvoiceDetailsService>;
}