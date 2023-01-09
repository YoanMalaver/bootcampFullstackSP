package com.challengeshopos.bank.Service;

import com.challengeshopos.bank.Entity.Client;
import com.challengeshopos.bank.Entity.Product;
import com.challengeshopos.bank.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class ProductServiceImplementation implements ProductService{
    @Autowired
    ProductRepository productRepository;

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getProductById(int id) {
        return productRepository.findById(id);
    }

    @Override
    public boolean deleteProductById(int id) {
        return getProductById(id).map(product -> {
            productRepository.deleteById(id);
            return true;
        }).orElse(false);
    }



    public String generateNumber(String n) {
        String a = "46";
        String c = "23";
        String arrayToString = "";
        String[] numeros = new String[8];

        //genero los 8 numeros faltantes y los inserto en el array como valores de tipo texto
        for(int x = 0; x < numeros.length;x++) {
            numeros[x] = String.valueOf((int) Math.floor((Math.random()*9)));
        }



        return arrayToString;
    }

    public String generateCode(String n) {
        String a = "46";
        String c = "23";
        Random rand = new Random();
        String code = "";
        if (n.equals("Cuenta De Ahorros")) {
            code += a;
        } else if (n.equals("Cuenta Corriente")) {
                code += c;
        }

        for (int i = 0; i < 8; i++) {
            code += rand.nextInt(10);
        }

        return code;
    }

}
