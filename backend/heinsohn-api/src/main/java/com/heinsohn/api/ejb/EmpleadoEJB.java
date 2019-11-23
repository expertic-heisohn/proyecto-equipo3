package com.heinsohn.api.ejb;

import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;

import com.heinsohn.api.ejb.dao.DAO;
import com.heinsohn.api.ejb.dao.OperacionDAO;
import com.heinsohn.api.ejb.domain.Empleado;


@Stateless(name="EmpleadoEJB")
public class EmpleadoEJB extends DAO implements OperacionDAO<Empleado>,EmpleadoLocalEJB{

	@Override
	public List<Empleado> consultarDatos() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Empleado consultarPorId(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean eliminarPorId(Long Id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Empleado insertar(Empleado d) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Empleado actualizar(Empleado d) {
		// TODO Auto-generated method stub
		return null;
	}


}
