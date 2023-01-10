package com.challengeshopos.bank.Entity.Repository;

import com.challengeshopos.bank.Entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
}
