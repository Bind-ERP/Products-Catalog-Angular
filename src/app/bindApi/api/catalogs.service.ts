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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { BankPage } from '../model/bankPage';
import { Category1 } from '../model/category1';
import { CurrencyPage } from '../model/currencyPage';
import { LocationPage } from '../model/locationPage';
import { PriceListPage } from '../model/priceListPage';
import { Series } from '../model/series';
import { UserPage } from '../model/userPage';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CatalogsService {

    protected basePath = 'http://api.bind.com.mx';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Obtiene la lista de bancos.
     * 
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public catalogsGetBanks(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<BankPage>;
    public catalogsGetBanks(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BankPage>>;
    public catalogsGetBanks(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BankPage>>;
    public catalogsGetBanks(filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filter !== undefined) {
            queryParameters = queryParameters.set('$filter', <any>filter);
        }
        if (orderby !== undefined) {
            queryParameters = queryParameters.set('$orderby', <any>orderby);
        }
        if (top !== undefined) {
            queryParameters = queryParameters.set('$top', <any>top);
        }
        if (skip !== undefined) {
            queryParameters = queryParameters.set('$skip', <any>skip);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<BankPage>(`${this.basePath}/api/Banks`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene la lista de Categorias.
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public catalogsGetCategories(observe?: 'body', reportProgress?: boolean): Observable<Array<Category1>>;
    public catalogsGetCategories(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Category1>>>;
    public catalogsGetCategories(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Category1>>>;
    public catalogsGetCategories(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<Category1>>(`${this.basePath}/api/Categories`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene la lista de monedas.
     * 
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public catalogsGetCurrencies(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<CurrencyPage>;
    public catalogsGetCurrencies(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CurrencyPage>>;
    public catalogsGetCurrencies(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CurrencyPage>>;
    public catalogsGetCurrencies(filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filter !== undefined) {
            queryParameters = queryParameters.set('$filter', <any>filter);
        }
        if (orderby !== undefined) {
            queryParameters = queryParameters.set('$orderby', <any>orderby);
        }
        if (top !== undefined) {
            queryParameters = queryParameters.set('$top', <any>top);
        }
        if (skip !== undefined) {
            queryParameters = queryParameters.set('$skip', <any>skip);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<CurrencyPage>(`${this.basePath}/api/Currencies`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene la lista de sucursales.
     * 
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public catalogsGetLocations(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<LocationPage>;
    public catalogsGetLocations(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LocationPage>>;
    public catalogsGetLocations(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LocationPage>>;
    public catalogsGetLocations(filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filter !== undefined) {
            queryParameters = queryParameters.set('$filter', <any>filter);
        }
        if (orderby !== undefined) {
            queryParameters = queryParameters.set('$orderby', <any>orderby);
        }
        if (top !== undefined) {
            queryParameters = queryParameters.set('$top', <any>top);
        }
        if (skip !== undefined) {
            queryParameters = queryParameters.set('$skip', <any>skip);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<LocationPage>(`${this.basePath}/api/Locations`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene la lista de precios.
     * 
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public catalogsGetPriceLists(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<PriceListPage>;
    public catalogsGetPriceLists(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PriceListPage>>;
    public catalogsGetPriceLists(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PriceListPage>>;
    public catalogsGetPriceLists(filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filter !== undefined) {
            queryParameters = queryParameters.set('$filter', <any>filter);
        }
        if (orderby !== undefined) {
            queryParameters = queryParameters.set('$orderby', <any>orderby);
        }
        if (top !== undefined) {
            queryParameters = queryParameters.set('$top', <any>top);
        }
        if (skip !== undefined) {
            queryParameters = queryParameters.set('$skip', <any>skip);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<PriceListPage>(`${this.basePath}/api/PriceLists`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene la lista de Series.
     * 
     * @param docType 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public catalogsGetSeries(docType: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Series>>;
    public catalogsGetSeries(docType: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Series>>>;
    public catalogsGetSeries(docType: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Series>>>;
    public catalogsGetSeries(docType: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (docType === null || docType === undefined) {
            throw new Error('Required parameter docType was null or undefined when calling catalogsGetSeries.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (docType !== undefined) {
            queryParameters = queryParameters.set('docType', <any>docType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<Series>>(`${this.basePath}/api/Series`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtiene la lista de usuarios.
     * 
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public catalogsGetUsers(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'body', reportProgress?: boolean): Observable<UserPage>;
    public catalogsGetUsers(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserPage>>;
    public catalogsGetUsers(filter?: string, orderby?: string, top?: number, skip?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserPage>>;
    public catalogsGetUsers(filter?: string, orderby?: string, top?: number, skip?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filter !== undefined) {
            queryParameters = queryParameters.set('$filter', <any>filter);
        }
        if (orderby !== undefined) {
            queryParameters = queryParameters.set('$orderby', <any>orderby);
        }
        if (top !== undefined) {
            queryParameters = queryParameters.set('$top', <any>top);
        }
        if (skip !== undefined) {
            queryParameters = queryParameters.set('$skip', <any>skip);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<UserPage>(`${this.basePath}/api/Users`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}