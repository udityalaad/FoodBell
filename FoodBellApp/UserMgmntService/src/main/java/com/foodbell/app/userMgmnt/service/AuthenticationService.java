package com.foodbell.app.userMgmnt.service;


import com.foodbell.app.userMgmnt.entity.Account;

public interface AuthenticationService {
    public Boolean addAccount(Account account) throws Exception;
    public Boolean authenticateAccountByEmail(String email, String password);
    public Boolean authenticateAccountByPhone(String phone, String password);
}
