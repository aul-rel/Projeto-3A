package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.dao.ClienteDAO;
import com.model.Cliente;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        
        String email = request.getParameter("email");
        String senha = request.getParameter("senha");
        
        Cliente cliente = ClienteDAO.autenticar(email, senha);
        
        if (cliente != null) {
            HttpSession session = request.getSession();
            session.setAttribute("usuario", cliente);
            
            out.print("{\"isAdmin\":" + cliente.isAdmin() + "}");
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            out.print("{\"message\":\"Email ou senha incorretos.\"}");
        }
        out.close();
    }
}