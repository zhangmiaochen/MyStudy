package Test_01;

import java.util.Date;

public class ArrayTest {

	public static void main(String[] args) {
		// TODO �Զ����ɵķ������
		 double[] myList = {1.9, 2.9, 3.4, 3.5};
		 
	      // ��ӡ��������Ԫ��
	      for (double element: myList) {
	         System.out.println(element);
	      }
	      try {
	          System.out.println(new Date( ) + "\n");
	          Thread.sleep(10000);
	          System.out.println(new Date( ) + "\n");
	       } catch (Exception e) {
	           System.out.println("Got an exception!");
	       }
	}

}
