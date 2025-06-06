
function cena1() {
    const idade = 25;
    const ehClienteVip = false;
    const rendaMensal = 2500;
    const scoreCredito = 650;

    if (
        (idade >= 18 && rendaMensal >= 2000 && scoreCredito >= 600) ||
        (ehClienteVip === true && idade >= 18)
    ) {
        console.log("Empréstimo aprovado");
    } else {
        console.log("Empréstimo negado");
    }
}
function cena2() {
    const idade = 17;

    const ehClienteVip = false;

    const rendaMensal = 3000;

    const scoreCredito = 700;

    if (
        (idade >= 18 && rendaMensal >= 2000 && scoreCredito >= 600) ||
        (ehClienteVip === true && idade >= 18)
    ) {
        console.log("Empréstimo aprovado");
    } else {
        console.log("Empréstimo negado");
    }
}
function cena3() {
    const idade = 22;

    const ehClienteVip = true;

    const rendaMensal = 1800;

    const scoreCredito = 550;

    if (
        (idade >= 18 && rendaMensal >= 2000 && scoreCredito >= 600) ||
        (ehClienteVip === true && idade >= 18)
    ) {
        console.log("Empréstimo aprovado");
    } else {
        console.log("Empréstimo negado");
    }
}
cena1();
cena2();
cena3();



