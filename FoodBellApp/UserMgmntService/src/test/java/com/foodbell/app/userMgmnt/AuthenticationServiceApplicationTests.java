package com.foodbell.app.userMgmnt;

import com.foodbell.app.userMgmnt.entity.Account;
import com.foodbell.app.userMgmnt.service.AuthenticationService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AuthenticationServiceApplicationTests {
	@Autowired
	private AuthenticationService authenticationService; //= Mockito.mock(AuthenticationService.class);

	@Test
	void contextLoads() {
	}


	@Test
	void checkAddAccount () throws Exception {
		// ----------------------- Case 0 - Add Account Success -----------------------
		final Account account0 = new Account(null, "test0@_test_email.com", "+11111111111", "test0Password", null);
		Assertions.assertTrue(authenticationService.addAccount(account0));

		// ----------------------- Case - 1a, 1b, 1c, 1d -----------------------
		final Account account1 = new Account(null, null, "+10000000000", "test1Password", null);

		/* 1.0 - Exception - Adding account w/o email */
		Exception e0 = Assertions.assertThrows(Exception.class, () -> {
			authenticationService.addAccount(account1);
		});
		Assertions.assertEquals(e0.getMessage(), "Email is a mandatory field");

		/* 1.1 - Exception - Adding account with ambiguous email (already exists for another account) */
		account1.setEmail("test0@_test_email.com");
		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			authenticationService.addAccount(account1);
		});
		Assertions.assertEquals(e1.getMessage(), "Account with email '" + account1.getEmail() + "' already exists.");


		/* 1.2 - Exception - Adding account with unique email, but w/o password */
		account1.setEmail("test1@_test_email.com");			// No more exception - due to ambiguous or null email
		account1.setPassword(null);
		Exception e2 = Assertions.assertThrows(Exception.class, () -> {
				authenticationService.addAccount(account1);
			});
		Assertions.assertEquals(e2.getMessage(), "Password is a mandatory field");

		/* 1.3 - Exception - Adding account with unique-email & password, but with w/o phone */
		account1.setPassword("test1Password");			// No more exception - due to null password
		account1.setPhone(null);						// No Phone
		Exception e3 = Assertions.assertThrows(Exception.class, () -> {
			authenticationService.addAccount(account1);
		});
		Assertions.assertEquals(e3.getMessage(), "Phone is a mandatory field");


		/* 1.4 - Exception - Adding account with unique-email & password, but with ambiguous phone (already exists for another account) */
		account1.setPhone("+11111111111");				// Already exists (Ambiguous)
		Exception e4 = Assertions.assertThrows(Exception.class, () -> {
			authenticationService.addAccount(account1);
		});
		Assertions.assertEquals(e4.getMessage(), "Account with phone '" + account1.getPhone() + "' already exists.");


		/* 1.5 - Success - Adding correct account - with [unique email, unique phone and with a password] */
		account1.setPhone("+10000000000");						// No more exception - due to ambiguous phone
		Assertions.assertTrue(authenticationService.addAccount(account1));
		// -------------------------------------------------------



		// ----------------------- Case 2 -----------------------
		/* Add account with email, unique phone, password */
		Account account2 = new Account(null, "test2@_test_email.com", "+12222222222", "test2Password", null);
		Assertions.assertTrue(authenticationService.addAccount(account2));
		// -------------------------------------------------------
	}


	@Test
	void checkAuthenticateByEmail () throws Exception {
		Account account = new Account(null, "test3@_test_email.com", "+13333333333", "test3Password", null);
		Assertions.assertTrue(authenticationService.addAccount(account));


		// Authenticate by Email
		Assertions.assertFalse(authenticationService.authenticateAccountByPhone("test2@_test_email.com", "test3Password"));

		Assertions.assertFalse(authenticationService.authenticateAccountByEmail("test3@_test_email.com", "testPassword"));
		Assertions.assertTrue(authenticationService.authenticateAccountByEmail("test3@_test_email.com", "test3Password"));
	}


	@Test
	void checkAuthenticateByPhone () throws Exception {
		Account account = new Account(null, "test4@_test_email.com", "+14444444444", "test4Password", null);
		Assertions.assertTrue(authenticationService.addAccount(account));

		//  Authenticate by Phone
		Assertions.assertFalse(authenticationService.authenticateAccountByPhone("+13333333333", "test4Password"));

		Assertions.assertFalse(authenticationService.authenticateAccountByPhone("+14444444444", "testPassword"));
		Assertions.assertTrue(authenticationService.authenticateAccountByPhone("+14444444444", "test4Password"));
	}
}
