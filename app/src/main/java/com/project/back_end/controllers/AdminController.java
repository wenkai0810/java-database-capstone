package com.project.back_end.controllers;

import com.project.back_end.models.Admin;
import com.project.back_end.services.AppService;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController 
@RequestMapping("${api.path}admin") 
public class AdminController {

    private final AppService service;

    // 2. Constructor-based injection
    //@Autowired
    public AdminController(AppService service) {
        this.service = service;
    }

    @PostMapping("/login")
    public ResponseEntity<?> adminLogin(@RequestBody Admin admin) {
        return service.validateAdmin(admin.getUsername(), admin.getPassword());
    }
}


