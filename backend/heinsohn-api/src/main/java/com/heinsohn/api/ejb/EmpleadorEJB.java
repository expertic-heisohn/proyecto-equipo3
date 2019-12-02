package com.heinsohn.api.ejb;

import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;

import org.hibernate.Session;

import com.heinsohn.api.ejb.dao.DAO;
import com.heinsohn.api.ejb.dao.OperacionDAO;
import com.heinsohn.api.ejb.domain.Empleado;
import com.heinsohn.api.ejb.domain.Empleador;




@Stateless(name="EmpleadorEJB")
public class EmpleadorEJB extends DAO implements EmpleadorLocalEJB{

	@Override
	public List<Empleador> consultarDatos() {
		Session session = createSession();
		List<Empleador> empleador = session.createQuery("SELECT e FROM Empleador e", Empleador.class).getResultList();
		session.close();
		return empleador;
	}

	@Override
	public Empleador consultarPorId(Long id) {
		Session session = createSession();
		return session.find(Empleador.class, id);
	}

	@Override
	public Boolean eliminarPorId(Long Id) {
		Session session = createSession();
		session.beginTransaction();
		Empleador empleador = session.find(Empleador.class, Id);
		session.delete(empleador);
		session.getTransaction().commit();
		session.close();
		return Boolean.TRUE;
	}

	@Override
	public Empleador insertar(Empleador empleador) {
		Session session = createSession();
		session.beginTransaction();
		

		session.persist(empleador);
			
		
		session.getTransaction().commit();
		session.close();
		return empleador;
	}

	@Override
	public Empleador actualizar(Empleador empleador) {
		Session session = createSession();
		session.beginTransaction();
		session.merge(empleador);
		session.getTransaction().commit();
		session.close();
		return empleador;
	}

	
	@Override
	public List<Empleador> consultarPorNombre(String nombreEmpresa) {
		// TODO Auto-generated method stub
		Session session = createSession();
		List<Empleador> empleadores = session.createQuery("SELECT e FROM Empleador e WHERE e.nombreEmpresa Like '%"+ nombreEmpresa +"%' ", Empleador.class).getResultList();
		// JDCB - usamos SQL
		// JPA o Hibernate, Podemo usar JPQL - HSQL -> Generan consultas SQL
		session.close();
		return empleadores;
		
		

	}

	

}
