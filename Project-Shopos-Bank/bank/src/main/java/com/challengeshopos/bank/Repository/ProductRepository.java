package com.challengeshopos.bank.Repository;

import com.challengeshopos.bank.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
