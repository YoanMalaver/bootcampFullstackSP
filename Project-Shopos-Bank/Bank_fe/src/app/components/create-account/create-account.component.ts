import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  forma!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.loadDataForm();
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
  createForm() {
    this.forma = this.fb.group({
      client: this.fb.group({
        id: ['', Validators.required],
      }),
      product: this.fb.group({
        id: ['', Validators.required],
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
        id: 2,
      },
      product: {
        id: 1,
      },
    });
  }

  guardar() {
    console.log(this.forma);

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
