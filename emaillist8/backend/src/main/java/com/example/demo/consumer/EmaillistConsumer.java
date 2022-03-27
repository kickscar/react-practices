package com.example.demo.consumer;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.example.demo.vo.EmaillistVo;

@Component
public class EmaillistConsumer {
	
	@Autowired
	@LoadBalanced
	private RestTemplate restTemplate;

	public Iterable<EmaillistVo> getAllEmail() {
		return Arrays.asList(restTemplate.getForObject("http://service-emaillist/api", EmaillistVo[].class));
	}
}
