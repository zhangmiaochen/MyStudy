package models;

import Polymorphic.Mortal;
import jiekou.AP;
import jiekou.AD;

public class ADAPHero extends Hero implements AD, AP, Mortal {
    @Override
    public void magicAttack() {
        System.out.println("进行魔法攻击");
    }

    @Override
    public void physicAttack() {
        System.out.println("进行物理攻击");
    }

    @Override
    public void die() {
        System.out.println("Kill ADAPHero");
    }
}
