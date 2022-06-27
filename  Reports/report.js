$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/login.feature");
formatter.feature({
  "name": "Uniform Sales page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Submit button",
  "keyword": "And "
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "amit",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "uniform.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid username \"amit\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "uniform.user_enter_invalid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "uniform.user_click_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "uniform.validation_message_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with authorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signin"
    }
  ]
});
formatter.step({
  "name": "user enter valid username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on catalog",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on Sales",
  "keyword": "And "
});
formatter.step({
  "name": "user click on Returns",
  "keyword": "And "
});
formatter.step({
  "name": "user type customer name",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Filter button result is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on logout",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin@123"
      ]
    }
  ]
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "uniform.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with authorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signin"
    }
  ]
});
formatter.step({
  "name": "user enter valid username \"admin\" and password \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "uniform.user_enter_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on catalog",
  "keyword": "Then "
});
formatter.match({
  "location": "uniform.user_click_on_catalogue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Sales",
  "keyword": "And "
});
formatter.match({
  "location": "uniform.user_click_on_Sales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Returns",
  "keyword": "And "
});
formatter.match({
  "location": "uniform.user_click_on_Returns()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user type customer name",
  "keyword": "When "
});
formatter.match({
  "location": "uniform.user_type_customer_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Filter button result is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "uniform.click_on_Filter_button_result_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on logout",
  "keyword": "Then "
});
formatter.match({
  "location": "uniform.user_clicks_on_logout()"
});
formatter.result({
  "status": "passed"
});
});