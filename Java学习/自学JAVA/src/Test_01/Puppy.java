package Test_01;

public class Puppy {

	String name;
	int age;
	String sex;
	public String getName() {
		System.out.println("name:"+name);
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		System.out.println("age:"+age);
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getSex() {
		System.out.println("性别："+sex);
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Puppy(String name) {
		// TODO 自动生成的构造函数存根
		System.out.println("name:"+name);
	}
	public static void main(String[] args) {
		Puppy p1=new Puppy("zmc");
		p1.setAge(25);
		p1.getAge();
		p1.setSex("男");
		p1.getSex();
		p1.setName("xsf");
		p1.getName();
		
	}
}
