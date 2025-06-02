package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.model.Carrinho;
import com.model.ItemCarrinho;

@WebServlet("/carrinho")
public class CarrinhoServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        HttpSession session = request.getSession();
        Carrinho carrinho = (Carrinho) session.getAttribute("carrinho");
        if (carrinho == null) {
            carrinho = new Carrinho();
            session.setAttribute("carrinho", carrinho);
        }

        String nome = request.getParameter("nome");
        double preco = Double.parseDouble(request.getParameter("preco"));

        carrinho.adicionarItem(new ItemCarrinho(nome, preco));

        out.print("{\"message\":\"Item adicionado!\",\"totalItens\":" + carrinho.getTotalItens() + "}");
        out.close();
    }
}
