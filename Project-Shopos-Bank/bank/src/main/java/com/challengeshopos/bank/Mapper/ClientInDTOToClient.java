package com.challengeshopos.bank.Mapper;

import com.challengeshopos.bank.Dto.ClientInDTO;
import com.challengeshopos.bank.Entity.Client;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Date;

@Component
public class ClientInDTOToClient implements IMapper<ClientInDTO, Client>{

    @Override
    public Client map(ClientInDTO in) {
        Client client = new Client();
        client.setTypeId(in.getTypeId());
        client.setIdentificationId(in.getIdentificationId());
        client.setFirtsNames(in.getFirtsNames());
        client.setLastNames(in.getLastNames());
        client.setEmail(in.getEmail());
        client.setDateOfBirth(in.getDateOfBirth());
        client.setTelephone(in.getTelephone());
        client.setCreatedDate(new Date());
        //client.setCreationUser(client.getCreationUser());
        return client;
    }

}
