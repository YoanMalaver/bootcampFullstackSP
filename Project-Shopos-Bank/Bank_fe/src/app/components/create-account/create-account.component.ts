import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { AccountService } from 'src/app/shared/services/account.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  forma!: FormGroup;

  // objeto para guardar la seccion del produto del formulario
  selectedOrg: Product = new Product();
  sel!: number;
  numberAcco!: string;
  //modelo de el producto id y tipo producto
  products: Product[] = [];

  // input idcliente actual
  @Input() idCli!: number;

  constructor(
    private fb: FormBuilder,
    public _productService: ProductService,
    private _accountService: AccountService,
    private _router: Router
  ) {
    this.createForm();
    this.loadDataForm();
  }
  get selectedOrgMod() {
    return this.selectedOrg.productType;
  }

  set selectedOrgMod(value) {
    if (value == 'Cuenta Corriente') {
      this._productService.getNumber(value).subscribe((resp) => {
        this.numberAcco = resp;
      });
      console.log(this.forma.value.accountNumber);
      this.sel = 1;
    } else if (value == 'Cuenta De Ahorros') {
      this._productService.getNumber(value).subscribe((resp) => {
        this.numberAcco = resp;
      });
      this.sel = 2;
    }
    this.sel;
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }

  get idCliNoValid() {
    return (
      this.forma.get('client.id')?.invalid &&
      this.forma.get('client.id')?.touched
    );
  }
  get idProNoValid() {
    return (
      this.forma.get('product.id')?.invalid &&
      this.forma.get('product.id')?.touched
    );
  }
  get accountyNoValid() {
    return (
      this.forma.get('accountType')?.invalid &&
      this.forma.get('accountType')?.touched
    );
  }
  get accountNuNoValid() {
    return (
      this.forma.get('accountNumber')?.invalid &&
      this.forma.get('accountNumber')?.touched
    );
  }

  get accounValid() {
    return (
      this.forma.get('accounType.value')?.valid &&
      this.forma.get('accountType')?.touched
    );
  }
  createForm() {
    this.forma = this.fb.group({
      client: this.fb.group({
        id: ['', Validators.required],
      }),
      product: this.fb.group({
        id: ['', Validators.pattern('^[0-9]*$')],
      }),
      accountType: [''],
      accountNumber: ['', Validators.required],
    });
  }

  loadDataForm() {
    // this.forma.setValue({
    this.forma.reset({
      accountNumber: '',
      accountType: '',
      client: {
        id: 0,
      },
      product: {
        id: 1,
      },
    });
  }

  guardar(idx: number) {
    console.log(this.forma.value);
    if (this.forma.valid == true) {
      this._accountService.createAccount(this.forma.value).subscribe((res) => {
        this._router.navigate(['/manage-client', idx]);
      });
      this._productService.hideModal();
    } else {
      return Object.values(this.forma.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }
  }
}
