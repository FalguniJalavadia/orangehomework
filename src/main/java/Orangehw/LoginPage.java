package Orangehw;

import org.openqa.selenium.By;

public class LoginPage extends Utils {
    private By _firstName = By.cssSelector("input#txtUsername");
    private By _password = By.cssSelector("input#txtPassword");
    private By _login = By.cssSelector("input.button");
    private By _actual = By.id("spanMessage");


   // enter name and password
    public void userEnterNameAndPassword(String Username, String password)
    {
        SendText(_firstName, Username);
        SendText(_password, password);
    }
    // click on loginpage
    public void userClickOnLogin()
    {
        clickOnElement(_login);
    }
    // get error message
    public void userShouldSeeErrorMessage(String ErrorMessage)
    { String expected = ErrorMessage;
    assertTextMessage("fsdfs", expected, _actual);


    }
}