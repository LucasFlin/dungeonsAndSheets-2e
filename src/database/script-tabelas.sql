-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE dns_2e;

USE dns_2e;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) not null,
email VARCHAR(100) not null,
senha VARCHAR(256) not null
);

CREATE TABLE personagem (
id INT PRIMARY KEY AUTO_INCREMENT,
nome varchar(100) not null,
raca varchar(45) not null,
classe varchar(45) not null,
forc int not null,
des int not null,
cons int not null,
intel int not null,
sab int not null,
car int not null,
hp_total int,
hp_atual int,
criado_em datetime default current_timestamp(),
id_player INT,
FOREIGN KEY (id_player) REFERENCES usuario(id)
);

create table pericias (
id_personagem int,
foreign key pericias(id_personagem) references personagem(id),
primary key(id_personagem),
acrobacia tinyint(1) default 0,
lidar_animais tinyint(1) default 0,
arcanismo tinyint(1) default 0,
atletismo tinyint(1) default 0,
atuacao tinyint(1) default 0,
blefar tinyint(1) default 0,
furtividade tinyint(1) default 0,
historia tinyint(1) default 0,
intimidacao tinyint(1) default 0,
intuicao tinyint(1) default 0,
investigacao tinyint(1) default 0,
medicina tinyint(1) default 0,
natureza tinyint(1) default 0,
percepcao tinyint(1) default 0,
persuasao tinyint(1) default 0,
prestidigitacao tinyint(1) default 0,
religiao tinyint(1) default 0,
sobrevivencia tinyint(1) default 0
);

create table rolagens (
id int auto_increment,
id_player int,
constraint rolagens_player foreign key (id_player) references usuario(id),
primary key(id, id_player),
dado int,
fk_personagem int,
constraint rolagens_personagem foreign key (fk_personagem) references personagem(id),
data_rolagem datetime default current_timestamp()
);

insert into usuario (nome, email, senha) value ('placeholder','placeholder@placeholder.com',sha2('placeholder',256));
insert into personagem (nome, raca, classe, forc, des, cons, intel, sab, car, hp_total, hp_atual, id_player) value ('','','',0,0,0,0,0,0,0,0,(select case when (select nome from usuario order by nome desc limit 1) = 'placeholder' then (select id from usuario where nome = 'placeholder') else (select count(id)+1 from usuario) end from usuario));
insert into pericias (id_personagem) value ((select case when (select nome from personagem) = '' then (select id from personagem where nome = '' order by id desc limit 1) else (select count(id)+1 from personagem) end from personagem));

select * from usuario;
select * from personagem;
select * from pericias;