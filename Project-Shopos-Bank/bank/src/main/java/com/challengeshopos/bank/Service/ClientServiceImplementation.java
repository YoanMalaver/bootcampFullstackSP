package com.challengeshopos.bank.Service;

import com.challengeshopos.bank.Entity.Client;
import com.challengeshopos.bank.Entity.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImplementation implements ClientService {

    //inyectar dependencia
    @Autowired
    ClientRepository clientRepository;


    @Override
    public Client createClient(Client client) {
        return this.clientRepository.save(client);
    }

    @Override
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @Override
    public Optional<Client> getClientById(int id) {
        return clientRepository.findById(id);
    }

    @Override
    public boolean deleteClientById(int id) {
        return getClientById(id).map(client -> {
            clientRepository.deleteById(id);
            return true;
        }).orElse(false);
    }
}
