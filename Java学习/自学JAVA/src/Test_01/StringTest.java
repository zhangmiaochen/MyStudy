package Test_01;

public class StringTest {

	public static void main(java.lang.String[] args) {
		// TODO �Զ����ɵķ������
		String b="zmc";
		String contat1="Hello, My";
		String Contat2="Name is ZMC";
		System.out.println(b.length());
		System.out.println(contat1.concat(Contat2));
		System.out.printf("Hello,�ҵ����ֽ�%s,����%d�꣬����%s,���%.2f","zmc",25,"����",182.5);
		String info=String.format("Hello,�ҵ����ֽ�%s,����%d�꣬����%s,���%.2f", "zmc",25,"����",182.5);
		System.out.println("");
		System.out.println(info);
		System.out.println(info.hashCode());
	}

}
