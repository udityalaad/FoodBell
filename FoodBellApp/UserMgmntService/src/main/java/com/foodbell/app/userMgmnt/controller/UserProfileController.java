package com.foodbell.app.userMgmnt.controller;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.foodbell.app.userMgmnt.service.UserProfileService;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/userProfiles")
@Slf4j
@Data
//@ControllerAdvice
public class UserProfileController {
    @Autowired
    private UserProfileService userProfileService;    
    
    @GetMapping("/getUserProfileByEmail/{email}")
    public Object findUserProfileByEmail(@PathVariable("email") String email)  throws Exception {
//      log.info("In: User Profile Controller -> findUserProfileByEmail");
    	return userProfileService.findUserProfileByEmail(email);
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