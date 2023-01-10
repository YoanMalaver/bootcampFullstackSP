package com.challengeshopos.bank.Entity.Repository;

import com.challengeshopos.bank.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Integer> {
}
