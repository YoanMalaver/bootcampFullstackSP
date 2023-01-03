package com.challengeshopos.bank.Service;

import com.challengeshopos.bank.Entity.Account;


import java.util.List;
import java.util.Optional;

public interface AccountService {
    public Account createAccount(Account account);
    public List<Account> getAllAccounts();
    public Optional<Account> getAccountById(int id);
    public boolean deleteAccountById(int id);

}
