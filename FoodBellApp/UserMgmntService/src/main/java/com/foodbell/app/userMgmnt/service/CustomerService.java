package com.foodbell.app.userMgmnt.service;

import com.foodbell.app.userMgmnt.entity.Customer;

import java.util.List;

public interface CustomerService {
    public Customer addCustomer(Customer customer) throws Exception;
    public Customer findCustomerByCustomerId(Long customerId);
    public Customer updateCustomer(Customer customer) throws Exception;
    public List<Customer> findAllCustomers() throws Exception;
    public Customer findCustomerByCustomerEmail(String cusEmail) throws Exception;
}