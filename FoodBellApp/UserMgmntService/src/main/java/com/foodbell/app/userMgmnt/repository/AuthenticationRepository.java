package com.foodbell.app.userMgmnt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodbell.app.userMgmnt.entity.Account;

public interface AuthenticationRepository extends JpaRepository<Account, Long> {
    Account[] findAccountByEmailAndPassword(String email, String password);
    Account[] findAccountByPhoneAndPassword(String phone, String password);

    Account findAccountByEmail(String email);
    Account findAccountByPhone(String phone);
}
