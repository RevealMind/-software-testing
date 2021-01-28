package com.github.revealmind.testing.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.revealmind.testing.dao.UserDao;
import com.github.revealmind.testing.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class UserController {
    private final UserDao userDao;
    private final ObjectMapper mapper = new ObjectMapper();

    @Autowired
    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @PostMapping("/users/register")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String register(@RequestBody User user) throws JsonProcessingException {
        List<User> users = userDao.getUser(user.getLogin());
        HashMap<String, String> map = new HashMap<>();

        if (!users.isEmpty()) {
            map.put("error", "User with this login already exists");
            return mapper.writeValueAsString(map);
        }

        userDao.addUser(user);
        map.put("login", user.getLogin());

        return mapper.writeValueAsString(map);
    }

    @PostMapping("/users/login")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String login(@RequestBody User user) throws JsonProcessingException {
        List<User> users = userDao.getUser(user.getLogin());
        HashMap<String, String> map = new HashMap<>();

        if (!users.isEmpty() && users.get(0).getPassword().equals(user.getPassword())) {
            map.put("login", user.getLogin());
        } else {
            map.put("error", "Incorrect login or password");
        }

        return mapper.writeValueAsString(map);
    }

    @GetMapping(value = "/users/user")
    @ResponseBody
    public String getUser() throws JsonProcessingException {
        HashMap<String, Map<String, String>> map = new HashMap<>();
        List<User> users = userDao.getUser("");
        if (users.isEmpty()) {
            map.put("user", null);
        } else {
            map.put("user", new HashMap<>());
            map.get("user").put("login", users.get(0).getLogin());
        }
        return mapper.writeValueAsString(map);
    }
}
