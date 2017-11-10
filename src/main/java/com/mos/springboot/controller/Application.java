package com.mos.springboot.controller;

//https://dzone.com/articles/spring-boot-the-right-boot-for-you-1?utm_source=Top%205&utm_medium=email&utm_campaign=2017-02-10

//mvn package && java -jar target/gs-spring-boot-0.1.0.jar
//java -jar gs-spring-boot-0.1.0.jar
//http://localhost:8090/ -> porten application.properties
//http://localhost:8090/hello-world
import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication(scanBasePackages={"com.mos.springboot"})// same as @Configuration @EnableAutoConfiguration @ComponentScan
public class Application {
    
    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(Application.class, args);
        
//        #######System.out.println("Let's inspect the beans provided by Spring Boot:");#######
//        String[] beanNames = ctx.getBeanDefinitionNames();
//        Arrays.sort(beanNames);
//        for (String beanName : beanNames) {
//            System.out.println("###->BeanName: " +beanName);
//        }
    }

  //Enable Global CORS support for the application
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/getRequest").allowedOrigins("http://localhost:8080");
                registry.addMapping("/api/user").allowedOrigins("http://localhost:8080");
            }
        };
    }
}
