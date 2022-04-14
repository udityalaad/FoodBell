package com.foodbell.app.userMgmnt.controller;
  
import com.foodbell.app.userMgmnt.entity.Account;
import com.foodbell.app.userMgmnt.service.AuthenticationService;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/authentication")
@Slf4j
@Data
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/addAccount")
    public Boolean addAccount (@RequestBody Account account) throws Exception {
//        log.info("In: Authentication Controller -> addAccount");
        return authenticationService.addAccount(account);
    }

    @GetMapping("/authenticateAccountByEmail/{email}/{password}")
    public Boolean authenticateAccountByEmail (@PathVariable("email") String email, @PathVariable("password") String password) {
//        log.info("In: Authentication Controller -> authenticateAccountByEmail");
        return authenticationService.authenticateAccountByEmail(email,password);
    }

    @GetMapping("/authenticateAccountByPhone/{phone}/{password}")
    public Boolean authenticateAccountByPhone (@PathVariable("phone") String phone, @PathVariable("password") String password) {
//        log.info("In: Authentication Controller -> authenticateAccountByPhone");
        return authenticationService.authenticateAccountByPhone(phone, password);
    }

    @ExceptionHandler(value=Exception.class)
    public ResponseEntity handleAllExceptions(Exception exception){
        Map<String, Object> body = new LinkedHashMap();
        body.put("error", true);
        body.put("time", LocalDateTime.now());
        body.put("message", exception.getMessage());

        return new ResponseEntity(body, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
