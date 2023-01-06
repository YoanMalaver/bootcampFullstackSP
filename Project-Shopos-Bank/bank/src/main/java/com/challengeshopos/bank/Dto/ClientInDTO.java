package com.challengeshopos.bank.Dto;


import java.util.Date;

public class ClientInDTO {

    private String typeId;
    private String identificationId;
    private String firtsNames;
    private String lastNames;
    private String email;
    private Date dateOfBirth;
    private String telephone;

    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    public String getIdentificationId() {
        return identificationId;
    }

    public void setIdentificationId(String identificationId) {
        this.identificationId = identificationId;
    }

    public String getFirtsNames() {
        return firtsNames;
    }

    public void setFirtsNames(String firtsNames) {
        this.firtsNames = firtsNames;
    }

    public String getLastNames() {
        return lastNames;
    }

    public void setLastNames(String lastNames) {
        this.lastNames = lastNames;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
}
