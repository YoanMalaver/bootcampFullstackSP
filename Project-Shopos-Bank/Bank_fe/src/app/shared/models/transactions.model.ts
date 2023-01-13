export interface TransactionInterface {
  id?: number;
  accountType?: string;
  accountNumber?: string;
  accountBalance?: number;
  accountAvailableBalance?: null;
  exemptGMF?: boolean;
  accountStatus?: string;
  createdDate?: Date;
  creationUser?: null;
  dateModification?: null;
  userModification?: null;
  transactions?: TransactionElement[];
}

export interface TransactionElement {
  id?: number;
  amountOfmoney?: number;
  description?: string;
  accountOfTransaction?: string;
  financialMovement?: string;
  movementType?: string;
  createdDate?: Date;
  finalBalance?: number;
}

export class Transaction implements TransactionInterface {
  id?: number;
  accountType?: string;
  accountNumber?: string;
  accountBalance?: number;
  accountAvailableBalance?: null;
  exemptGMF?: boolean;
  accountStatus?: string;
  createdDate?: Date;
  creationUser?: null;
  dateModification?: null;
  userModification?: null;
  transactions!: TransactionElement[];
}
