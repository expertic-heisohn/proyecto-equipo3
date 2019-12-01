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
import com.heinsohn.api.ejb.EmpleadorEJB;
import com.heinsohn.api.ejb.EmpleadorLocalEJB;
import com.heinsohn.api.ejb.domain.*;


@WebServlet("/api/v1/empleador")
public class EmpleadorRestServlet extends HttpServlet {

	@EJB(beanName="EmpleadorEJB")
	private EmpleadorLocalEJB empleadorEJB;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
		List<Empleador> listaEmpleados = empleadorEJB.consultarDatos();

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
		Empleador empleador = new Empleador();
		empleador.setNombreEmpresa(request.getParameter("nombreEmpresa"));
		empleador.setDigitoVerificacion(request.getParameter("digitoVerificacion"));
		empleador.setTelefonoEmpleador(request.getParameter("telefonoEmpleador"));
		empleador.setCorreoEmpleador(request.getParameter("correoEmpleador"));
		empleador.setDireccionPrincipal(request.getParameter("direccionPrincipal"));
		empleador.setNombreContacto(request.getParameter("nombreContacto"));

		empleadorEJB.insertar(empleador);

		Gson gson = new Gson();
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(gson.toJson(empleador));
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
		Empleador empleador = gson.fromJson(builderPayload.toString(), Empleador.class);
		System.out.println(empleador);

		PrintWriter out = resp.getWriter();
		resp.setContentType("application/json");
		resp.setCharacterEncoding("UTF-8");
		out.print(gson.toJson(empleador));
		out.flush();
	}

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Long id = Long.parseLong(req.getParameter("id"));
		empleadorEJB.eliminarPorId(id);
	}

}
