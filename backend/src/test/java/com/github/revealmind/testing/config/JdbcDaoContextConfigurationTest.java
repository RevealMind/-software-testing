package com.github.revealmind.testing.config;

import com.github.revealmind.testing.dao.UserDao;
import com.github.revealmind.testing.dao.UserDatabaseDao;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@TestConfiguration
public class JdbcDaoContextConfigurationTest {
    @Bean
    public UserDao userDao(DataSource dataSource) {
        return new UserDatabaseDao(dataSource);
    }

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.sqlite.JDBC");
        dataSource.setUrl("jdbc:sqlite:test.db");
        dataSource.setUsername("");
        dataSource.setPassword("");
        return dataSource;
    }
}