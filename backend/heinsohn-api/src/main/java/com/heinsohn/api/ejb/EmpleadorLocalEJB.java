package com.heinsohn.api.ejb;

import javax.ejb.Local;
import com.heinsohn.api.ejb.dao.OperacionDAO;
import com.heinsohn.api.ejb.domain.Empleador;

@Local
public interface EmpleadorLocalEJB extends OperacionDAO<Empleador> {

}
