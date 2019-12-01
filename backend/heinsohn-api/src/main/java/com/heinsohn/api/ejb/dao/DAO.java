package com.heinsohn.api.ejb.dao;

import org.hibernate.Session;

import com.heinsohn.api.HibernateUtil;

public abstract class DAO {
	
	public Session createSession() {
		return HibernateUtil.getSessionFactory().openSession();
		
	}
	

}
