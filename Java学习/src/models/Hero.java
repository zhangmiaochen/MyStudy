package models;
public class Hero {
    public  Hero()
    {
        System.out.println("Hero的构造方法");
    }
    public Hero(String Name)
    {
        this.name=Name;
        System.out.println("Hero有一个带参数的构造方法");
    }
    public  void finalize()
    {
        System.out.println("这个英雄正在被回收");
    }
    String name;
    float hp;
    float armor;
    int moveSpeed;
}
