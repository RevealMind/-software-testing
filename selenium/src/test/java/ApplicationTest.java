import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

public class ApplicationTest {
    @BeforeEach
    public void init() {
        open("http://localhost:3000/");
    }

    @Test
    public void tryLogin() {
        $(".login__link").click();
        $("input[name=login]").setValue("test");
        $("button").click();
        $(".error").shouldHave(text("This field is required"));
    }

    @Test
    public void registerAndLogout() {
        String login = "test";
        String password = "qwerty";
        $(".register__link").click();

        $("input[name=login]").setValue(login);
        $("input[name=password]").setValue(password);

        $("button").click();
        $("span").shouldHave(text("Hello, test!"));

        $(".logout__link").click();
    }
}
