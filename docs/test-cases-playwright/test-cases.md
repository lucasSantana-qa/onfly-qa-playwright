CT001 - Adicionar produto no carrinho com sucesso

Objetivo: Validar que o usuário consegue adicionar um produto no carrinho com sucesso

* Dado que o usuário está na pagina inicial da ToolShop
* Quando ele busca por um produto disponível
* E adiciona o produto ao carrinho
* Então o produto deve ser adicionado ao carrinho com sucesso
* E o carrinho deve exibir a quantidade correta de itens

CT002 - Subtotal do carrinho

Objetivo: Validar que o subtotal do carrinho contém o mesmo valor do produto adicionado

* Dado que o usuário está na pagina inicial da ToolShop
* Quando ele adiciona um produto no carrinho
* Então o total do carrinho deve ser igual ao valor do produto adicionado

CT003 - Remover produto do carrinho

Objetivo: Validar que o usuário consegue remover um produto do carrinho

* Dado que o usuário possui um produto no carrinho
* Quando ele remove o produto do carrinho 
* Então o carrinho deve ser atualizado sem o produto que foi removido
