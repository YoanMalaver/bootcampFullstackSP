package com.challengeshopos.bank.Controllers;

import com.challengeshopos.bank.Entity.Client;
import com.challengeshopos.bank.Repository.ClientRepository;
import com.challengeshopos.bank.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/clients")
public class ClientController {

    //Inyectar logica de negocio
    @Autowired
    ClientService clientService;
    @Autowired
    private ClientRepository clientRepository;

    @GetMapping
    public ResponseEntity<List<Client>> getClients() {
        return  new ResponseEntity<>(clientService.getAllClients(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Client> getClientById(@PathVariable int id) {
        return clientService.getClientById(id)
                .map(client -> new ResponseEntity<>(client, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("{id}")
    public ResponseEntity<Client> updateClient(@PathVariable int id, @RequestBody Client infoClient) {
        Optional<Client> clientOptional = clientService.getClientById(id);
        if(!clientOptional.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        infoClient.setId(clientOptional.get().getId());
        infoClient.setAccounts(clientOptional.get().getAccounts());
        infoClient.setDateModification(clientOptional.get().getDateModification());
        Client updateClient = clientRepository.save(infoClient);
        return ResponseEntity.ok(updateClient);

    }

    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        return new ResponseEntity<>(clientService.createClient(client), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteClientById(@PathVariable int id) {
        if(clientService.deleteClientById(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
