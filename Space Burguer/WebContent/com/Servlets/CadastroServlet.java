package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.dao.ClienteDAO;
import com.model.Cliente;

@WebServlet("/cadastrar")
public class CadastroServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        String nome = request.getParameter("nome");
        String email = request.getParameter("email");
        String senha = request.getParameter("senha");

        Cliente novoCliente = new Cliente(nome, email, senha);
        boolean sucesso = ClienteDAO.cadastrar(novoCliente);

        if (sucesso) {
            out.print("{\"message\":\"Cadastro realizado com sucesso!\"}");
        } else {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            out.print("{\"message\":\"Erro ao cadastrar usuário.\"}");
        }
        out.close();
    }
}
