package com.challengeshopos.bank.Controllers;

import com.challengeshopos.bank.Entity.Account;
import com.challengeshopos.bank.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/accounts")
public class AccountController {
    @Autowired
    AccountService accountService;

    @GetMapping("")
    public List<Account> index() {
        return this.accountService.getAllAccounts();
    }

    @GetMapping("{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable int id) {
        return accountService.getAccountById(id)
                .map(account -> new ResponseEntity<>(account, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("{id}")
    public ResponseEntity<Account> updateAccount(@PathVariable int id, @RequestBody Account infoAcount) {
        Optional<Account> AccountOptional = accountService.getAccountById(id);
        if(!AccountOptional.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        infoAcount.setId(AccountOptional.get().getId());
        accountService.createAccount(infoAcount);

        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        return new ResponseEntity<>(accountService.createAccount(account), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteAccountById(@PathVariable int id) {
        if(accountService.deleteAccountById(id)) {
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
