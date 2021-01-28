package com.github.revealmind.testing.dao;

import com.github.revealmind.testing.model.User;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import javax.sql.DataSource;
import java.text.MessageFormat;
import java.util.List;

public class UserDatabaseDao extends JdbcDaoSupport implements UserDao {

    public UserDatabaseDao(DataSource dataSource) {
        super();
        setDataSource(dataSource);
        String initSqlUsers = "CREATE TABLE IF NOT EXISTS Users (login VARCHAR(100) not null primary key, password VARCHAR(100) not null);";
        getJdbcTemplate().update(initSqlUsers);
    }

    @Override
    public void addUser(User user) {
        String sql = MessageFormat.format("INSERT INTO Users (login, password) VALUES (''{0}'', ''{1}'');", user.getLogin(), user.getPassword());
        getJdbcTemplate().update(sql);
    }

    @Override
    public List<User> getUser(String login) {
        String sql = MessageFormat.format("SELECT * FROM Users WHERE Users.login = ''{0}'';", login);
        return getJdbcTemplate().query(sql, new BeanPropertyRowMapper(User.class));
    }

}
