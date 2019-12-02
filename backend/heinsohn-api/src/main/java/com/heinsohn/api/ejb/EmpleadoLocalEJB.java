package com.heinsohn.api.ejb;

import java.util.List;

import javax.ejb.Local;

import com.heinsohn.api.ejb.dao.OperacionDAO;
import com.heinsohn.api.ejb.domain.Empleado;

@Local
public interface EmpleadoLocalEJB extends OperacionDAO<Empleado>{
	
	
	List<Empleado> consultarPorNombre(String nombre);
}
