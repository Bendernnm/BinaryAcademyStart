class ImprovedFighter extends Fighter {
    hit(enemy, point) {
        super.hit(enemy, point * 2);
    }
    //Реалізував таким чином, щоб під час бою не витрачати час на те який у мене обєкт

    doubleHit(enemy, point) {
        super.hit(enemy, point * 2);
    }
}