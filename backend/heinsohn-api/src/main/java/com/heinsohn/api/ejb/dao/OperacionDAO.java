package com.heinsohn.api.ejb.dao;

import java.util.List;

public interface OperacionDAO <D> {
	
	List<D> consultarDatos();
	
	D consultarPorId(Long id);
	
	Boolean eliminarPorId(Long Id);
	
	D insertar(D d);
	
	D actualizar(D d);

}
