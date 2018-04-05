import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProductPage, NewProduct, CurrencyPage, ProductDetails, ProductPrices, ProductPricesItems, Product } from './bindApi/model/models';
import { IHttpService } from 'angular';
import { CatalogsService, ProductsService } from './bindApi';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { Modal } from 'ngx-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public productPageList: ProductPage;
  public currencyList: CurrencyPage;
  public productDetail: ProductDetails;
  public newProduct: NewProduct;

  @ViewChild('modalAdd') modalAdd: Modal;
  @ViewChild('modalDelete') modalDelete: Modal;
  @ViewChild('modalDetail') modalDetail: Modal;

  public apiKey = '';
  public apiKeyError = false;
  public apiKeyErrorMsg = 'Favor de llenar el campo Api Key';

  public errorMessage;
  public itemsPerPage = 50;
  public currentPage = 0;
  public totalPages = 0;
  public code = "";
  public description = "";
  public numberOfInventory = 0;
  public selectedCurrency: "";

  private deleteId = "";
  private detailId = ""

  constructor(private http: HttpClient,
    private catalogsService: CatalogsService,
    private productsService: ProductsService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig) {
    catalogsService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });
    productsService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });
    this.toastyConfig.theme = 'bootstrap';
  }

  searchProducts(): void {
    this.getProducts().subscribe(data => {
      this.productPageList = data;
      if (data.count > 0) {
        this.totalPages = Math.ceil(data.count / this.itemsPerPage);
      }
    }, error => {
      this.handleError(error);
    });
  }

  search() {
    this.validateApiKey();
    if (this.apiKey) {
      this.searchProducts();
    }
  }

  getProductDetail() {
    this.productsService.productsGetDetail(this.detailId).subscribe(data => {
      this.productDetail = data;
    }, error => {
      this.handleError(error);
    });
  }

  validateApiKey() {
    if (!this.apiKey) {
      this.apiKeyError = true;
    } else {
      this.apiKeyError = false;
    }
  }

  addProduct() {
    this.productsService.defaultHeaders = null;
    this.productsService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });

    if (this.newProduct.CurrencyId === "b7e2c065-bd52-40ca-b508-3accdd538860") {
      this.newProduct.ExchangeRate = undefined;
    }
    this.productsService.productsAddProduct(this.newProduct).subscribe(data => {
      this.modalAdd.close();
      this.showMsg("El Producto se ha agregado correctamente", "ok");
      this.searchProducts();
    }, error => {
      this.handleError(error);
    });
  }

  getProducts(): Observable<ProductPage> {
    this.productsService.defaultHeaders = null;
    this.productsService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });
    let filter = this.generateFilter();
    if (filter) {
      this.currentPage = 0;
    }
    return this.productsService.productsGet(filter, undefined, this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  assignDeleteId(id) {
    this.validateApiKey();
    if (this.apiKey) {
      this.modalDelete.open();
      this.deleteId = id;
    }
  }

  deleteProduct() {
    this.productsService.defaultHeaders = null;
    this.productsService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });

    this.productsService.productsDeleteByID(this.deleteId).subscribe(data => {
      this.showMsg("El Producto se ha eliminado correctamente", "ok");
      this.search();
    }, error => {
      this.handleError(error);
    });
  }

  assignDetailId(id) {
    this.validateApiKey();
    if (this.apiKey) {
      this.searchCurrency().subscribe(data => {
        this.productDetail = <ProductDetails>{};
        this.productDetail.Prices = <ProductPrices>{};
        this.productDetail.Prices.Items = <ProductPricesItems[]>[{}];
        this.currencyList = data;
        this.detailId = id;
        this.getProductDetail();
        this.modalDetail.open();
      }, error => {
        this.handleError(error);
      });
    }
  }

  searchCurrency(): Observable<any> {
    this.catalogsService.defaultHeaders = null;
    this.catalogsService.defaultHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.apiKey });

    return this.catalogsService.catalogsGetCurrencies();
  }

  initAddProduct() {
    this.validateApiKey();
    if (this.apiKey) {
      this.searchCurrency().subscribe(data => {
        this.currencyList = data;
        this.newProduct = <NewProduct>{};
        this.modalAdd.open();
      }, error => {
        this.handleError(error);
      });
    }
  }

  generateFilter(): string {
    if (this.code || this.description || this.numberOfInventory) {
      let filter = "";
      if (this.code) {
        filter += "Code eq '" + this.code + "'";
      }
      if (this.description) {
        if (filter) {
          filter += " and ";
        }
        filter += " Description eq '" + this.description + "'";
      }
      if (this.numberOfInventory) {
        if (filter) {
          filter += " and ";
        }
        filter += " CurrentInventory gt " + this.numberOfInventory;
      }
      return filter;
    }
    return undefined;
  }


  pageLinks(): number[] {
    var rangeSize = 5;
    var ret = [];
    var start;

    if (this.totalPages == 0)
      return ret;

    start = this.currentPage;
    if (start > this.totalPages - rangeSize) {
      start = this.totalPages - rangeSize;
    }

    for (var i = start; i < start + rangeSize; i++) {
      if (i >= 0) {
        ret.push(i);
      }
    }
    return ret;
  };



  next() {
    if ((this.currentPage + 1) == this.totalPages)
      return;
    this.currentPage = this.currentPage + 1;
    this.search();
  }

  prev() {
    if (this.currentPage == 0)
      return;

    this.currentPage = this.currentPage - 1;
    this.search();
  }

  first() {

    if (this.currentPage == 0)
      return;

    this.currentPage = 0;
    this.search();

  }

  last() {
    if ((this.currentPage) == this.totalPages)
      return;
    this.currentPage = this.totalPages - 1;
    this.search();
  }

  goToPage(page) {
    this.currentPage = page;
    this.search();
  }

  showMsg(message, type) {
    this.toastyService.clearAll();
    var toastOptions: ToastOptions = {
      title: "",
      msg: message,
      showClose: true,
      timeout: 3000,
      theme: 'bootstrap'
    };

    switch (type) {
      case 'ok':
        this.toastyService.success(toastOptions);
        break;
      case 'error':
        this.toastyService.error(toastOptions);
        break;
    }
  }

  handleError(error) {
    let message = "";
    message += error.message;
    if (error.Code) {
      message += " Código de Error: " + error.Code;
    }
    this.showMsg(message, "error");
  }

  ngOnInit() {
    this.newProduct = <NewProduct>{};
    this.productPageList = <ProductPage>{
      value: <Product[]>[]
    };
    this.currencyList = <CurrencyPage>{};
    this.productDetail = <ProductDetails>{};
    this.productDetail.Prices = <ProductPrices>{};
    this.productDetail.Prices.Items = <ProductPricesItems[]>[{}]
  }
}
