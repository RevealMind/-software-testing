package com.github.revealmind.testing;

import com.github.revealmind.testing.dao.UserDao;
import com.github.revealmind.testing.dao.UserDatabaseDao;
import com.github.revealmind.testing.model.User;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.testcontainers.containers.MySQLContainer;

import javax.sql.DataSource;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
public class DatabaseTest {
    public DataSource dataSource() {
        MySQLContainer<?> mysql = new MySQLContainer<>("mysql:5.6.42");
        mysql.start();
        System.out.println(mysql.getJdbcUrl());
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setDriverClassName(mysql.getDriverClassName());
        hikariConfig.setJdbcUrl(mysql.getJdbcUrl());
        hikariConfig.setUsername(mysql.getUsername());
        hikariConfig.setPassword(mysql.getPassword());

        return new HikariDataSource(hikariConfig);
    }

    private final UserDao userDao = new UserDatabaseDao(dataSource());

    @Test
    public void testAddUser() {
        String login = "tester";
        String password = "123456";
        User user = new User(login, password);
        userDao.addUser(user);
        List<User> users = userDao.getUser(login);
        assertEquals(1, users.size());
        assertEquals(login, users.get(0).getLogin());
    }
}
