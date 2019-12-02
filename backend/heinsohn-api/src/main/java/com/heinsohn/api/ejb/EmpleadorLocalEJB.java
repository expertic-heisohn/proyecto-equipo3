package com.heinsohn.api.ejb;

import java.util.List;

import javax.ejb.Local;
import com.heinsohn.api.ejb.dao.OperacionDAO;
import com.heinsohn.api.ejb.domain.Empleado;
import com.heinsohn.api.ejb.domain.Empleador;

@Local
public interface EmpleadorLocalEJB extends OperacionDAO<Empleador> {
	
	List<Empleador> consultarPorNombre(String nombreEmpresa);
	
	
}
