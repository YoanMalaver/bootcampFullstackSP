package com.challengeshopos.bank.Controllers;

import com.challengeshopos.bank.Entity.Client;
import com.challengeshopos.bank.Entity.Product;
import com.challengeshopos.bank.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("")
    public List<Product> index() {
        return this.productService.getAllProducts();
    }

    @GetMapping("{id}")
    public ResponseEntity<Product>  getProductById(@PathVariable int id) {
        return productService.getProductById(id)
                .map(product -> new ResponseEntity<>(product, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping Product createProduct(@RequestBody Product infoProduct) {
        return this.productService.createProduct(infoProduct);
    }

    @PutMapping("{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product infoProduct) {
        Optional<Product> productOptional = productService.getProductById(id);
        //respuesta
        if(!productOptional.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        infoProduct.setId(productOptional.get().getId());
        productService.createProduct(infoProduct);

        return ResponseEntity.noContent().build();

    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteProductById(@PathVariable int id) {
        if(productService.deleteProductById(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
