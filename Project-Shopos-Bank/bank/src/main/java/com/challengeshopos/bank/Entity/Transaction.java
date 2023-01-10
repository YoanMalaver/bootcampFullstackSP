package com.challengeshopos.bank.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idAccount")
    @JsonProperty(access =  JsonProperty.Access.WRITE_ONLY)
    private Account account;

    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;
    private int amountOfmoney;
    private String description;
    private String accountOfTransaction;
    private String financialMovement;
    private String movementType;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(value=TemporalType.DATE)
    private Date createdDate;
    private int finalBalance;

    public enum TransactionType {
        CONSIGNACION("Consignacion"),
        RETIRO("Retiro"),
        TRASNFERENCIA("Transferencia");
        private final String name;

        TransactionType(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }
    }

    public Transaction() {
        this.createdDate = new Date();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public TransactionType getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(TransactionType transactionType) {
        this.transactionType = transactionType;
    }

    public int getAmountOfmoney() {
        return amountOfmoney;
    }

    public void setAmountOfmoney(int amountOfmoney) {
        this.amountOfmoney = amountOfmoney;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAccountOfTransaction() {
        return accountOfTransaction;
    }

    public void setAccountOfTransaction(String accountOfTransaction) {
        this.accountOfTransaction = accountOfTransaction;
    }

    public String getFinancialMovement() {
        return financialMovement;
    }

    public void setFinancialMovement(String financialMovement) {
        this.financialMovement = financialMovement;
    }

    public String getMovementType() {
        return movementType;
    }

    public void setMovementType(String movementType) {
        this.movementType = movementType;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public int getFinalBalance() {
        return finalBalance;
    }

    public void setFinalBalance(int finalBalance) {
        this.finalBalance = finalBalance;
    }
}
