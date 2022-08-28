package br.com.tqi.bookstore.test.builder;

import br.com.tqi.bookstore.model.Client;
import br.com.tqi.bookstore.model.ItensSell;
import lombok.Builder;

import java.util.ArrayList;
import java.util.List;

@Builder
public class ClientBuilder {
    @Builder.Default
    private String id = "123456";

    @Builder.Default
    private String name = "client for test";

    @Builder.Default
    private String cpf = "11122233345";

    @Builder.Default
    private String phone = "12345678";

    @Builder.Default
    private String email = "test@test.com";

    @Builder.Default
    private List<ItensSell> itensSell = new ArrayList<>();

    public Client toClient(){ return new Client(id, name, cpf, phone, email, itensSell);}
}
