package com.github.revealmind.testing.dao;

import com.github.revealmind.testing.model.User;

import java.util.List;

public interface UserDao {
    void addUser(User user);
    List<User> getUser(String login);
}
