package com.challengeshopos.bank.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idProduct")
    @JsonProperty(access =  JsonProperty.Access.WRITE_ONLY)
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idClient")
    @JsonProperty(access =  JsonProperty.Access.WRITE_ONLY)
    private Client client;

    private String accountType;
    private String accountNumber;
    private Integer accountBalance;
    private Integer accountAvailableBalance;
    private boolean exemptGMF;

    private String accountStatus;

    public enum AccountStatus {
        ACTIVE("Activate"),
        INACTIVE("Inactive"),
        CANCELLED("Cancelled");
        private final String name;

        AccountStatus(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(value=TemporalType.DATE)
    private Date createdDate;

    private String creationUser;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(value=TemporalType.DATE)
    private Date dateModification;

    private String userModification;

    public Account() {
        this.accountBalance = 0;
        this.accountStatus = AccountStatus.ACTIVE.getName();
        this.createdDate = new Date();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public Integer getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(Integer accountBalance) {
        this.accountBalance = accountBalance;
    }

    public Integer getAccountAvailableBalance() {
        return accountAvailableBalance;
    }

    public void setAccountAvailableBalance(Integer accountAvailableBalance) {
        this.accountAvailableBalance = accountAvailableBalance;
    }

    public boolean isExemptGMF() {
        return exemptGMF;
    }

    public void setExemptGMF(boolean exemptGMF) {
        this.exemptGMF = exemptGMF;
    }

    public String getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getCreationUser() {
        return creationUser;
    }

    public void setCreationUser(String creationUser) {
        this.creationUser = creationUser;
    }

    public Date getDateModification() {
        return dateModification;
    }

    public void setDateModification(Date dateModification) {
        this.dateModification = dateModification;
    }

    public String getUserModification() {
        return userModification;
    }

    public void setUserModification(String userModification) {
        this.userModification = userModification;
    }
}
