package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;
public class uniform {
	WebDriver driver;
	@Given("User is on homepage")
	public void user_is_on_homepage() {
		System.setProperty("webdriver.chrome.driver", ".//lib//chromedriver.exe");
		driver = new ChromeDriver();
	    driver.get("http://uniformm1.upskills.in/admin");
	}

	@When("user enter invalid username {string} and password {string}")
	public void user_enter_invalid_username_and_password(String string, String string2) {
	    driver.findElement(By.name("username")).sendKeys("amit");
	    driver.findElement(By.name("password")).sendKeys("amit");
	}

	@When("User click on Submit button")
	public void user_click_on_Submit_button() {
	  driver.findElement(By.xpath("//div[@class='text-right']/button")).click();
	}

	@Then("validation message appears")
	public void validation_message_appears() {
		String expectedResult= "Administration";
		String actualResult = driver.getTitle();
		assertEquals(expectedResult,actualResult);
		
				
	}

	@When("user enter valid username {string} and password {string}")
	public void user_enter_valid_username_and_password(String string, String string2) {
		driver.findElement(By.name("username")).sendKeys("admin");
	    driver.findElement(By.name("password")).sendKeys("Admin@123");
	    driver.findElement(By.xpath("//div[@class='text-right']/button")).click();
	}
	
	@Then("user click on catalog")
	public void user_click_on_catalogue() throws InterruptedException {
		driver.findElement(By.xpath("//a[@class='pull-left']")).click();
		Thread.sleep(2000);
	}
	
	@Then("user click on Sales")
	public void user_click_on_Sales() throws InterruptedException {
		driver.findElement(By.xpath("//li[@id='sale']/a/span")).click();
		Thread.sleep(2000);
	}
	
	@Then("user click on Returns")
	public void user_click_on_Returns() {
		driver.findElement(By.linkText("Returns")).click();
	}
	
	@When("user type customer name")
	public void user_type_customer_name() {
		driver.findElement(By.name("filter_customer")).sendKeys("wdnkjw jbjscsac");
	}

	@When("Click on Filter button result is displayed")
	public void click_on_Filter_button_result_is_displayed() throws InterruptedException {
		driver.findElement(By.id("button-filter")).click();
		Thread.sleep(2000);;
	}

	@Then("user clicks on logout")
	public void user_clicks_on_logout() {
		driver.findElement(By.xpath("//ul[@class='nav pull-right']/li[4]/a")).click();
	}


	
}
