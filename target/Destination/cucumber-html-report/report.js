$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/features/login.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user should not be able login in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "User enter username as \"\u003cUsername\u003e\" and password as a \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "name": "user should see \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "password",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "ASDF",
        "asd1234",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "asdf",
        "asdf1234",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "ASDF",
        "ASDF1234",
        "Invalid credential"
      ]
    },
    {
      "cells": [
        "asdf",
        "Asdf1234",
        "Invalid credential"
      ]
    },
    {
      "cells": [
        "",
        "asdf1234",
        "user cannot be empty"
      ]
    },
    {
      "cells": [
        "ASDF",
        "",
        "password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "user cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "Asdf1234",
        "user cannot be empty"
      ]
    },
    {
      "cells": [
        "asdf",
        "",
        "password cannot be empty"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user should not be able login in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter username as \"ASDF\" and password as a \"asd1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_enter_username_as_and_password_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able login in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter username as \"asdf\" and password as a \"asdf1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_enter_username_as_and_password_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able login in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter username as \"ASDF\" and password as a \"ASDF1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_enter_username_as_and_password_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid credential\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_should_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: fsdfs expected:\u003cInvalid credential[]\u003e but was:\u003cInvalid credential[s]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat Orangehw.Utils.assertTextMessage(Utils.java:78)\r\n\tat Orangehw.LoginPage.userShouldSeeErrorMessage(LoginPage.java:26)\r\n\tat Orangehw.MyStepdefs.user_should_see(MyStepdefs.java:23)\r\n\tat ✽.user should see \"Invalid credential\"(file:///C:/Users/Public/OrangeHRM/./src/test/Resources/features/login.feature:7)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able login in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter username as \"asdf\" and password as a \"Asdf1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_enter_username_as_and_password_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid credential\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_should_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: fsdfs expected:\u003cInvalid credential[]\u003e but was:\u003cInvalid credential[s]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat Orangehw.Utils.assertTextMessage(Utils.java:78)\r\n\tat Orangehw.LoginPage.userShouldSeeErrorMessage(LoginPage.java:26)\r\n\tat Orangehw.MyStepdefs.user_should_see(MyStepdefs.java:23)\r\n\tat ✽.user should see \"Invalid credential\"(file:///C:/Users/Public/OrangeHRM/./src/test/Resources/features/login.feature:7)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able login in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter username as \"\" and password as a \"asdf1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_enter_username_as_and_password_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"user cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_should_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: fsdfs expected:\u003c[user] cannot be empty\u003e but was:\u003c[Username] cannot be empty\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat Orangehw.Utils.assertTextMessage(Utils.java:78)\r\n\tat Orangehw.LoginPage.userShouldSeeErrorMessage(LoginPage.java:26)\r\n\tat Orangehw.MyStepdefs.user_should_see(MyStepdefs.java:23)\r\n\tat ✽.user should see \"user cannot be empty\"(file:///C:/Users/Public/OrangeHRM/./src/test/Resources/features/login.feature:7)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able login in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter username as \"ASDF\" and password as a \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_enter_username_as_and_password_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_should_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: fsdfs expected:\u003c[p]assword cannot be em...\u003e but was:\u003c[P]assword cannot be em...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat Orangehw.Utils.assertTextMessage(Utils.java:78)\r\n\tat Orangehw.LoginPage.userShouldSeeErrorMessage(LoginPage.java:26)\r\n\tat Orangehw.MyStepdefs.user_should_see(MyStepdefs.java:23)\r\n\tat ✽.user should see \"password cannot be empty\"(file:///C:/Users/Public/OrangeHRM/./src/test/Resources/features/login.feature:7)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able login in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter username as \"\" and password as a \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_enter_username_as_and_password_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"user cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_should_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: fsdfs expected:\u003c[user] cannot be empty\u003e but was:\u003c[Username] cannot be empty\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat Orangehw.Utils.assertTextMessage(Utils.java:78)\r\n\tat Orangehw.LoginPage.userShouldSeeErrorMessage(LoginPage.java:26)\r\n\tat Orangehw.MyStepdefs.user_should_see(MyStepdefs.java:23)\r\n\tat ✽.user should see \"user cannot be empty\"(file:///C:/Users/Public/OrangeHRM/./src/test/Resources/features/login.feature:7)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able login in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter username as \"\" and password as a \"Asdf1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_enter_username_as_and_password_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"user cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_should_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: fsdfs expected:\u003c[user] cannot be empty\u003e but was:\u003c[Username] cannot be empty\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat Orangehw.Utils.assertTextMessage(Utils.java:78)\r\n\tat Orangehw.LoginPage.userShouldSeeErrorMessage(LoginPage.java:26)\r\n\tat Orangehw.MyStepdefs.user_should_see(MyStepdefs.java:23)\r\n\tat ✽.user should see \"user cannot be empty\"(file:///C:/Users/Public/OrangeHRM/./src/test/Resources/features/login.feature:7)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able login in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter username as \"asdf\" and password as a \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_enter_username_as_and_password_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orangehw.MyStepdefs.user_should_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: fsdfs expected:\u003c[p]assword cannot be em...\u003e but was:\u003c[P]assword cannot be em...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat Orangehw.Utils.assertTextMessage(Utils.java:78)\r\n\tat Orangehw.LoginPage.userShouldSeeErrorMessage(LoginPage.java:26)\r\n\tat Orangehw.MyStepdefs.user_should_see(MyStepdefs.java:23)\r\n\tat ✽.user should see \"password cannot be empty\"(file:///C:/Users/Public/OrangeHRM/./src/test/Resources/features/login.feature:7)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
});