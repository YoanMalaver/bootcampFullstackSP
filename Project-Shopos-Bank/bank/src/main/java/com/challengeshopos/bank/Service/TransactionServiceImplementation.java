package com.challengeshopos.bank.Service;

import com.challengeshopos.bank.Repository.TransactionRepository;
import com.challengeshopos.bank.Entity.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionServiceImplementation implements TransactionService{
    @Autowired
    TransactionRepository transactionRepository;

    @Override
    public Transaction createdTransaction(Transaction transaction) {
        return this.transactionRepository.save(transaction);
    }

    @Override
    public List<Transaction> getAllTransaction() {
        return transactionRepository.findAll();
    }

    @Override
    public Optional<Transaction> getTransactionById(int id) {
        return transactionRepository.findById(id);
    }

    @Override
    public boolean deleteTransactionById(int id) {
        return getTransactionById(id).map(transaction -> {
            transactionRepository.deleteById(id);
            return true;
        }).orElse(false);
    }
}
