package com.heinsohn.api.ejb;

import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;

import com.heinsohn.api.ejb.dao.DAO;
import com.heinsohn.api.ejb.dao.OperacionDAO;
import com.heinsohn.api.ejb.domain.Empleador;

@Local
@Stateless(name="EmpleadorEJB")
public class EmpleadorEJB extends DAO implements OperacionDAO<Empleador> {

	@Override
	public List<Empleador> consultarDatos() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Empleador consultarPorId(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean eliminarPorId(Long Id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Empleador insertar(Empleador d) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Empleador actualizar(Empleador d) {
		// TODO Auto-generated method stub
		return null;
	}

}
