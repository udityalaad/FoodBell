package com.foodbell.app.userMgmnt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbell.app.userMgmnt.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findCustomerByCustomerId(Long customerId);

    Customer findCustomerByCustomerEmail(String customerEmail);
    Customer findCustomerByCustomerPhone(String customerPhone);
}