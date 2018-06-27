package models;

import Polymorphic.Mortal;
import jiekou.AD;

public class ADHero extends Hero implements AD, Mortal {
    @Override
    public void physicAttack() {
        System.out.println("进行物理攻击");
    }

    @Override
    public void die() {
        System.out.println("Kill ADHero");
    }
    public  ADHero(String name)
    {
        super(name);
        System.out.println("ADHero的构造方法");
    }
}
