package com.dao;

import com.model.Produto;
import java.util.ArrayList;
import java.util.List;

public class ProdutoDAO {

    public static List<Produto> listar() {
        List<Produto> lista = new ArrayList<>();

        lista.add(new Produto(1, "X-Burguer", 12.90));
        lista.add(new Produto(2, "X-Salada", 14.50));
        lista.add(new Produto(3, "Refrigerante", 6.00));

        return lista;
    }
}
