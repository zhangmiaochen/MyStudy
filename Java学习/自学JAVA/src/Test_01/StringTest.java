package Test_01;

public class StringTest {

	public static void main(java.lang.String[] args) {
		// TODO 自动生成的方法存根
		String b="zmc";
		String contat1="Hello, My";
		String Contat2="Name is ZMC";
		System.out.println(b.length());
		System.out.println(contat1.concat(Contat2));
		System.out.printf("Hello,我的名字叫%s,今年%d岁，来自%s,身高%.2f","zmc",25,"江苏",182.5);
		String info=String.format("Hello,我的名字叫%s,今年%d岁，来自%s,身高%.2f", "zmc",25,"江苏",182.5);
		System.out.println("");
		System.out.println(info);
		System.out.println(info.hashCode());
	}

}
