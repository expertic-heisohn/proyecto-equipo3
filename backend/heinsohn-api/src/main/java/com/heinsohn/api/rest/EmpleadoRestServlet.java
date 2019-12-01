package com.heinsohn.api.rest;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.heinsohn.api.ejb.EmpleadoEJB;
import com.heinsohn.api.ejb.EmpleadoLocalEJB;
import com.heinsohn.api.ejb.domain.*;


@WebServlet("/api/v1/empleados")
public class EmpleadoRestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@EJB(beanName="EmpleadoEJB")
	private EmpleadoLocalEJB empleadoEJB;

	public EmpleadoRestServlet() {
		super();
		// TODO Auto-generated constructor stub
		// POJO

	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		List<Empleado> listaEmpleados = empleadoEJB.consultarDatos();
		Gson gson = new Gson();
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(gson.toJson(listaEmpleados));
		out.flush();
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		Empleado empleado = new Empleado();
		empleado.setNombre(request.getParameter("nombre"));
		empleado.setApellido(request.getParameter("apellido"));
		empleado.setNumeroDocumento(request.getParameter("numeroDocumento"));
		empleado.setCorreo(request.getParameter("correo"));
		empleado.setDireccion(request.getParameter("direccion"));
		empleado.setNombreEmpresa(request.getParameter("nombreEmpresa"));

		empleadoEJB.insertar(empleado);

		Gson gson = new Gson();
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(gson.toJson(empleado));
		out.flush();
	}

	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		BufferedReader bufferedReader = req.getReader();

		StringBuilder builderPayload = new StringBuilder();

		String line = null;
		while ((line = bufferedReader.readLine()) != null) {
			builderPayload.append(line);
		}

		Gson gson = new Gson();
		// Convertir el JSON a Objeto
		Empleado empleado = gson.fromJson(builderPayload.toString(), Empleado.class);
		System.out.println(empleado);

		PrintWriter out = resp.getWriter();
		resp.setContentType("application/json");
		resp.setCharacterEncoding("UTF-8");
		out.print(gson.toJson(empleado));
		out.flush();
	}

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Long id = Long.parseLong(req.getParameter("id"));
		empleadoEJB.eliminarPorId(id);
	}

}
