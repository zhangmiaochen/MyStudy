package Test_01;
import java.io.*;

public class Employee {
	String name;
	int age;
	String designation;
	double salary;

	// Employee ��Ĺ�����
	public Employee(String name) {
		this.name = name;
	}

	// ����age��ֵ
	public void empAge(int empAge) {
		age = empAge;
	}

	/* ����designation��ֵ */
	public void empDesignation(String designation) {
		designation = designation;
	}

	/* ����salary��ֵ */
	public void empSalary(double empSalary) {
		salary = empSalary;
	}

	/* ��ӡ��Ϣ */
	public void printEmployee() {
		System.out.println("Name:" + name);
		System.out.println("Age:" + age);
		System.out.println("Designation:" + designation);
		System.out.println("Salary:" + salary);
	}
}
