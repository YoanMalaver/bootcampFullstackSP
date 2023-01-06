package com.challengeshopos.bank.Service;

import com.challengeshopos.bank.Entity.Client;

import java.util.List;
import java.util.Optional;

public interface ClientService {

    Client createClient(Client client);
    public List<Client> getAllClients();
    public Optional<Client> getClientById(int id);
    public boolean deleteClientById(int id);
}
