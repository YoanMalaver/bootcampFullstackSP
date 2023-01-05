export interface ClientInterface {
  id: number;
  typeId: string;
  identificationId: string;
  firtsNames: string;
  lastNames: string;
  email: string;
  dateOfBirth: Date;
  telephone: string;
  createdDate: Date;
  accounts: Account[];
}

export class Client implements ClientInterface {
  id!: number;
  typeId!: string;
  identificationId!: string;
  firtsNames!: string;
  lastNames!: string;
  email!: string;
  dateOfBirth!: Date;
  telephone!: string;
  createdDate!: Date;
  accounts!: Account[];
}

export interface Account {
  id: number;
  idProduct: number;
  idClient: number;
  accountType: string;
  accountNumber: string;
  accountBalance: number;
  accountStatus: string;
  createdDate: Date;
}
