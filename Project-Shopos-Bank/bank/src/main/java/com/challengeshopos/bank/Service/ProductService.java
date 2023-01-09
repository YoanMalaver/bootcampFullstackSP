package com.challengeshopos.bank.Service;

import com.challengeshopos.bank.Entity.Product;

import java.util.List;
import java.util.Optional;
import java.util.Random;

public interface ProductService {
    public Product createProduct(Product product);
    public List<Product> getAllProducts();
    public Optional<Product> getProductById(int id);
    public boolean deleteProductById(int id);

    public String generateNumber(String n);
    public String generateCode(String n);
}
