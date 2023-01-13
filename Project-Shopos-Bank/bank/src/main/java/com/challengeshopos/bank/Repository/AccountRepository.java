package com.challengeshopos.bank.Repository;

import com.challengeshopos.bank.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Integer> {
}
