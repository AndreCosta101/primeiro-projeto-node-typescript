# Recuperação de Senha
<!-- São exatamente as funcionalidades ex:
-Usuário vai poder recuperar a senha informando o email antigo dele-->
**Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando seu email.
- O usuário deve receber um email com instruções de recuperação de Senha
- O usuário deve poder resetar sua senha;


<!-- Não são ligados com a regra de negócios. Ex:
O envio de emails deve ser feito usando NodeMailer 
Requisitos da parte técnica. Qual lib, qual banco etc.-->
**Requisitos Não-Funcionais**

- Utilizar Mailtrap para testar envio em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job);

**Regras de Negócio**

- 
- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de Perfil
<!-- São exatamente as funcionalidades ex:
-Usuário vai poder recuperar a senha informando o email antigo dele-->
**Requisitos Funcionais  RF**

- O usuário deve poder atualizar seu nome, seu email e senha.

<!-- Não são ligados com a regra de negócios. Ex:
O envio de emails deve ser feito usando NodeMailer 
Requisitos da parte técnica. Qual lib, qual banco etc.-->
**Regras de Negócio RN**

- O usuário não pode alterar seu email para um email já utilizado por outro usuário.
- Para atualizar sua senha, o usuário deve informar a senha antiga.
- Para atualizar sua senha, o usuário precisa confirmar a nova senha.

# Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;




# Agendamento de serviços

**Requisitos Funcionais RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador específico.
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos Não Funcionais RNF**

- A listagem de prestadores deve ser armazenada em cache;

**Regras de Negócio**

- Todo agendamento vai durar uma hora;
- Os agendamentos devem estar disponíveis entre as 8h as 18hrs. (Primeiro às 8h, último às 17h)
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;