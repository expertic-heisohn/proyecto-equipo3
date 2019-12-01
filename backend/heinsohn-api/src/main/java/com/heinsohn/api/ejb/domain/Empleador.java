package com.heinsohn.api.ejb.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_empleador")
public class Empleador {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;	

	@Column(name = "emp_nombreEmpresa", nullable = false, length = 120)
	private String nombreEmpresa;
	
	@Column(name = "emp_digitoVerificacion", nullable = false, length = 20)
	private String digitoVerificacion;
	
	@Column(name = "emp_telefonoEmpleador", nullable = false, length = 15)
	private String telefonoEmpleador;
	
	@Column(name = "emp_correoEmpleador", nullable = false, length = 15)
	private String correoEmpleador;
	
	@Column(name = "emp_direccionPrincipal")
	private String direccionPrincipal;
	
	@Column(name = "emp_nombreContacto", nullable = false, length = 80)
	private String nombreContacto;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombreEmpresa() {
		return nombreEmpresa;
	}

	public void setNombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa = nombreEmpresa;
	}	

	public String getDigitoVerificacion() {
		return digitoVerificacion;
	}

	public void setDigitoVerificacion(String digitoVerificacion) {
		this.digitoVerificacion = digitoVerificacion;
	}

	
	public String getTelefonoEmpleador() {
		return telefonoEmpleador;
	}

	public void setTelefonoEmpleador(String telefonoEmpleador) {
		this.telefonoEmpleador = telefonoEmpleador;
	}
	
	public String getCorreoEmpleador() {
		return correoEmpleador;
	}

	public void setCorreoEmpleador(String correoEmpleador) {
		this.correoEmpleador = correoEmpleador;
	}

	public String getDireccionPrincipal() {
		return direccionPrincipal;
	}

	public void setDireccionPrincipal(String direccionPrincipal) {
		this.direccionPrincipal = direccionPrincipal;
	}

	public String getNombreContacto() {
		return nombreContacto;
	}

	public void setNombreContacto(String nombreContacto) {
		this.nombreContacto = nombreContacto;
	}	

}
