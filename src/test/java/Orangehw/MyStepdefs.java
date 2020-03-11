package Orangehw;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MyStepdefs extends Utils{
     LoginPage loginPage = new LoginPage();
    @When("User enter username as {string} and password as a {string}")
    public void user_enter_username_as_and_password_as_a(String Username, String password)
    {
        loginPage.userEnterNameAndPassword(Username,password );

    }

    @When("user click on login")
    public void user_click_on_login() {
      loginPage.userClickOnLogin();
    }

    @Then("user should see {string}")
    public void user_should_see(String ErrorMessage)
    {
        loginPage.userShouldSeeErrorMessage(ErrorMessage);

    }

}
