package com.foodbell.app.userMgmnt.service;


import com.foodbell.app.userMgmnt.entity.Account;
import com.foodbell.app.userMgmnt.repository.AuthenticationRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class AuthenticationServiceImpl implements AuthenticationService {
    @Autowired
    private AuthenticationRepository authenticationRepository;

    public Boolean addAccount(Account account) throws Exception {
//        log.info("In: Authentication Service -> addAccount");

        String accEmail = account.getEmail();
        if (accEmail == null) {
            throw new Exception("Email is a mandatory field");
        }
        if (authenticationRepository.findAccountByEmail(accEmail) != null)  {
            throw new Exception("Account with email '" + accEmail + "' already exists.");
        }

        String accPhone = account.getPhone();
        if (accPhone == null) {
            throw new Exception("Phone is a mandatory field");
        }
        if (authenticationRepository.findAccountByPhone(accPhone) != null)  {
            throw new Exception("Account with phone '" + accPhone + "' already exists.");
        }

        String accPassword = account.getPassword();
        if (accPassword == null) {
            throw new Exception("Password is a mandatory field");
        }


        account.setActive("true");
        Account result = authenticationRepository.save(account);

        if (result != null) {
            return true;
        } else {
            return false;
        }
    }

    public Boolean authenticateAccountByEmail(String email, String password) {
//        log.info("In: Authentication Service -> authenticateAccountByEmail");

        Account[] result = authenticationRepository.findAccountByEmailAndPassword(email, password);

        if (result.length != 0) {
            return true;
        } else {
            return false;
        }
    }

    public Boolean authenticateAccountByPhone(String phone, String password) {
//        log.info("In: Authentication Service -> authenticateAccountByPhone");

        Account[] result = authenticationRepository.findAccountByPhoneAndPassword(phone, password);

        if (result.length != 0) {
            return true;
        } else {
            return false;
        }
    }
}
