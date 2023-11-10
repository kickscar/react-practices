package com.poscodx.mysite;

import org.apache.catalina.connector.Connector;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
//@EnableTransactionManagement
public class MySiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(MySiteApplication.class, args);
	}

	@Bean
	public TomcatServletWebServerFactory servletContainer() {
		return new TomcatServletWebServerFactory() {
			@Override
			protected void customizeConnector(Connector connector) {
				super.customizeConnector(connector);
				connector.setParseBodyMethods("POST,PUT,DELETE");
			}
		};
	}

//	@Bean
//	public PlatformTransactionManager transactionManager(@Autowired DataSource dataSource) {
//		return new DataSourceTransactionManager(dataSource); 
//	}
}
