export interface AccountInterface {
  id: number;
  idProduct: number;
  idClient: number;
  accountType: string;
  accountNumber: string;
  accountBalance: number;
  accountStatus: string;
  createdDate: Date;
}

export class Account implements AccountInterface {
  id!: number;
  idProduct!: number;
  idClient!: number;
  accountType!: string;
  accountNumber!: string;
  accountBalance!: number;
  accountStatus!: string;
  createdDate!: Date;
}
