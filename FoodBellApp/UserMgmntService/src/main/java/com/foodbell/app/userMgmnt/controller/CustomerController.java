package com.foodbell.app.userMgmnt.controller;

import com.foodbell.app.userMgmnt.entity.Customer;
import com.foodbell.app.userMgmnt.service.CustomerService;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/customers")
@Slf4j
@Data
//@ControllerAdvice
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/addCustomer")
    public Customer addCustomer (@RequestBody Customer customer)  throws Exception {
//        log.info("In: Customer Controller -> addCustomer");
        return customerService.addCustomer(customer);
    }
    

    @GetMapping("/getCustomer/{customerId}")
    public Customer findCustomerByCustomerId (@PathVariable("customerId") Long customerId) {
//        log.info("In: Customer Controller -> findCustomerByCustomerId");
        return customerService.findCustomerByCustomerId(customerId);
    }
    

    @PostMapping("/updateCustomer")
    public Customer updateCustomer (@RequestBody Customer customer)  throws Exception {
//        log.info("In: Customer Controller -> updateCustomer");
        return customerService.updateCustomer(customer);
    }
    
    
    @GetMapping("/getAllCustomers")
    public List<Customer> findAllCustomers () throws Exception {
//        log.info("In: Customer Controller -> findAllCustomers");
        return customerService.findAllCustomers();
    }
    
    
    @GetMapping("/getCustomerByEmail/{customerEmail}")
    public Customer findCustomerByCustomerEmail(@PathVariable("customerEmail") String customerEmail)  throws Exception {
//      log.info("In: Customer Service -> findCustomerByCustomerEmail");
    	return customerService.findCustomerByCustomerEmail(customerEmail);
    }
    

    @ExceptionHandler(value=Exception.class)
    public ResponseEntity handleAllExceptions(Exception exception){
        Map<String, Object> body = new LinkedHashMap();
        body.put("error", true);
        body.put("time", LocalDateTime.now());
        body.put("message", exception.getMessage());

        return new ResponseEntity(body,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}