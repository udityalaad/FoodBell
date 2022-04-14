package com.foodbell.app.userMgmnt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbell.app.userMgmnt.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>  {

}
