package com.challengeshopos.bank.Service;

import com.challengeshopos.bank.Entity.Transaction;

import java.util.List;
import java.util.Optional;

public interface TransactionService {

    public Transaction createdTransaction(Transaction transaction);
    public List<Transaction> getAllTransaction();
    public Optional<Transaction> getTransactionById(int id);
    public boolean deleteTransactionById(int id);
}
