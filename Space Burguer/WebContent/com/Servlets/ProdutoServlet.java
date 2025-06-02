import com.Model.Produto;
import com.Model.ProdutoDAO;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;
import com.dao.ProdutoDAO;
import com.model.Produto;

@WebServlet("/admin/produtos")
public class ProdutoServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        List<Produto> produtos = ProdutoDAO.listar();
        out.print("[");
        for (int i = 0; i < produtos.size(); i++) {
            Produto p = produtos.get(i);
            out.print("{\"id\":" + p.getId() + ",\"nome\":\"" + p.getNome() + "\",\"preco\":" + p.getPreco() + "}");
            if (i < produtos.size() - 1) out.print(",");
        }
        out.print("]");
        out.close();
    }
}
