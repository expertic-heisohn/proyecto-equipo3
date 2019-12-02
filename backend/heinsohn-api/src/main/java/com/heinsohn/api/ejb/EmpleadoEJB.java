package com.heinsohn.api.ejb;

import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;

import org.hibernate.Session;

import com.heinsohn.api.ejb.dao.DAO;
import com.heinsohn.api.ejb.dao.OperacionDAO;
import com.heinsohn.api.ejb.domain.Empleado;

@Stateless(name = "EmpleadoEJB")
public class EmpleadoEJB extends DAO implements OperacionDAO<Empleado>, EmpleadoLocalEJB {

	@Override
	public List<Empleado> consultarDatos() {
		Session session = createSession();
		List<Empleado> empleados = session.createQuery("SELECT e FROM Empleado e", Empleado.class).getResultList();
		// JDCB - usamos SQL
		// JPA o Hibernate, Podemo usar JPQL - HSQL -> Generan consultas SQL
		session.close();
		return empleados;

	}

	@Override
	public Empleado consultarPorId(Long id) {
		Session session = createSession();

		// JDCB - usamos SQL
		// JPA o Hibernate, Podemo usar JPQL - HSQL -> Generan consultas SQL
		return session.find(Empleado.class, id);
	}

	@Override
	public Boolean eliminarPorId(Long Id) {
		Session session = createSession();
		session.beginTransaction();
		Empleado empleado = session.find(Empleado.class, Id);
		session.delete(empleado);
		session.getTransaction().commit();
		session.close();
		return Boolean.TRUE;
	}

	@Override
	public Empleado insertar(Empleado empleado) {
		Session session = createSession();
		session.beginTransaction();
		

		session.persist(empleado);
			
		
		session.getTransaction().commit();
		session.close();
		return empleado;
	}

	@Override
	public Empleado actualizar(Empleado empleado) {
		Session session = createSession();
		session.beginTransaction();
		session.merge(empleado);
		session.getTransaction().commit();
		session.close();
		return empleado;
	}

	@Override
	public List<Empleado> consultarPorNombre(String nombre) {
		// TODO Auto-generated method stub
		Session session = createSession();
		List<Empleado> empleados = session.createQuery("SELECT e FROM Empleado e WHERE e.nombre Like '%"+ nombre +"%' ", Empleado.class).getResultList();
		// JDCB - usamos SQL
		// JPA o Hibernate, Podemo usar JPQL - HSQL -> Generan consultas SQL
		session.close();
		return empleados;
		
	}

}
