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
}
