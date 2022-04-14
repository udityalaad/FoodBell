package com.foodbell.app.userMgmnt.service;

import com.foodbell.app.userMgmnt.entity.Customer;
import com.foodbell.app.userMgmnt.repository.CustomerRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

@Service
@Slf4j
public class CustomerServiceImpl  implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public Customer addCustomer(Customer customer) throws Exception {
//        log.info("In: Customer Service -> addCustomer");

        String cusEmail = customer.getCustomerEmail();
        if (cusEmail == null) {
            throw new Exception("Email is a mandatory field");
        }
        if (customerRepository.findCustomerByCustomerEmail(cusEmail) != null)  {
            throw new Exception("Customer with email '" + cusEmail + "' already exists.");
        }

        String cusPhone = customer.getCustomerPhone();
        if (cusPhone == null) {
            throw new Exception("Phone is a mandatory field");
        }
        if (customerRepository.findCustomerByCustomerPhone(cusPhone) != null)  {
            throw new Exception("Customer with phone '" + cusPhone + "' already exists.");
        }
        
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    	if (customer.getCustomerDOB() != null) {
    		String dob = formatter.format(formatter.parse(customer.getCustomerDOB()));
    		customer.setCustomerDOB(dob);
    	}

        return customerRepository.save(customer);
    }
    

    public Customer findCustomerByCustomerId(Long customerId) {
//        log.info("In: Customer Service -> findCustomerByCustomerId");
        
        return customerRepository.findCustomerByCustomerId(customerId);
    }
    

    public Customer updateCustomer(Customer customer) throws Exception {
//        log.info("In: Customer Service -> updateCustomer");

        Long cusId = customer.getCustomerId();
        Customer newCustomer = customerRepository.findCustomerByCustomerId(cusId);
        
        if (cusId == null)  {
            throw new Exception("Customer Id cannot be empty");
        }

        if (newCustomer == null)  {
            throw new Exception("Customer with id '" + cusId + "' does not exists.");
        }

        String cusEmail = customer.getCustomerEmail();
        if (cusEmail == null) {
            throw new Exception("Email is a mandatory field");
        }
        Customer newCustomerEmail = customerRepository.findCustomerByCustomerEmail(cusEmail);
        if (newCustomerEmail != null)  {
            if (!newCustomerEmail.getCustomerId().equals(cusId)) {
                throw new Exception("Customer with email '" + cusEmail + "' already exists.");
            }
        }

        String cusPhone = customer.getCustomerPhone();
        if (cusPhone == null) {
            throw new Exception("Phone is a mandatory field");
        }
        Customer newCustomerPhone = customerRepository.findCustomerByCustomerPhone(cusPhone);
        if (newCustomerPhone != null)  {
            if (!newCustomerPhone.getCustomerId().equals(cusId)) {
                throw new Exception("Customer with phone '" + cusPhone + "' already exists.");
            }
        }
        
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    	if (customer.getCustomerDOB() != null) {
    		String dob = formatter.format(formatter.parse(customer.getCustomerDOB()));
    		customer.setCustomerDOB(dob);
    	}
        
        return customerRepository.save(customer);
    }
    
    
    public List<Customer> findAllCustomers ()  throws Exception{
//      log.info("In: Customer Service -> findAllCustomers");
    	return customerRepository.findAll();
    }
    
    
    public Customer findCustomerByCustomerEmail(String cusEmail)  throws Exception {
//      log.info("In: Customer Service -> findCustomerByCustomerEmail");      
      Customer newCustomerEmail = customerRepository.findCustomerByCustomerEmail(cusEmail);
      
      if (newCustomerEmail == null)  {
          throw new Exception("Customer with email '" + cusEmail + "' does not exist.");
      }
      
      return newCustomerEmail;
    }
}