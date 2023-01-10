package com.challengeshopos.bank.Controllers;

import com.challengeshopos.bank.Entity.Transaction;
import com.challengeshopos.bank.Service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/transactions")
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @GetMapping
    public ResponseEntity<List<Transaction>> getTransactions() {
        return new ResponseEntity<>(transactionService.getAllTransaction(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable int id) {
        return transactionService.getTransactionById(id)
                .map(transaction -> new ResponseEntity<>(transaction, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("{id}")
    public ResponseEntity<Transaction> updateTransaction(@PathVariable int id, @RequestBody Transaction infoTransaction) {
        Transaction transaction = transactionService.getTransactionById(id).orElse(null);
        if(transaction == null) {
            return ResponseEntity.notFound().build();
        }
        //transaction.setAccountOfTransaction(infoTransaction.getAccountOfTransaction());

        infoTransaction.setId(transaction.getId());
        transactionService.createdTransaction(infoTransaction);

        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction) {
        return new ResponseEntity<>(transactionService.createdTransaction(transaction), HttpStatus.CREATED);
    }
}
