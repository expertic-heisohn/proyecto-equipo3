package com.heinsohn.api.ejb;

import javax.ejb.Local;

import com.heinsohn.api.ejb.dao.OperacionDAO;
import com.heinsohn.api.ejb.domain.Empleado;

@Local
public interface EmpleadoLocalEJB extends OperacionDAO<Empleado>{

}
