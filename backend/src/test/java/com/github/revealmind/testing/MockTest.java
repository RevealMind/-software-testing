package com.github.revealmind.testing;

import com.github.revealmind.testing.controller.UserController;
import com.github.revealmind.testing.dao.UserDao;
import com.github.revealmind.testing.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;

import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = UserController.class)
@AutoConfigureMockMvc
@AutoConfigureRestDocs(outputDir = "target/docs")
public class MockTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserDao userDao;

    @Test
    public void userTest() throws Exception {
        String login = "tester";
        String pwd = "qwerty";
        User user = new User(login, pwd);
        when(userDao.getUser("")).thenReturn(Collections.singletonList(user));

        mockMvc.perform(get("/users/user"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.user.login").value(login))
                .andDo(document("user"));
    }
}
