package SQLHelper;
import java.sql.*;
public class DbUtil {
	public static void main(String[] args) {
	    PreparedStatement ps = null;
	    Connection ct = null;
	    ResultSet rs = null;

	    String url = "jdbc:sqlserver://localhost:1433;databaseName=WINDB";
	    String user="sa";  //��������Ա
	    String password="zhongketiandi";  //����

	    try {
	        //1.��������
	        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	        System.out.println("���������ɹ���");
	    }catch(Exception e) {
	        e.printStackTrace();
	        System.out.println("��������ʧ�ܣ�");
	    }
	    try {  
	        //2.����
	        ct=DriverManager.getConnection( url,user,password);
	        System.out.println("�������ݿ�ɹ���");
	    }catch(Exception e) {
	        e.printStackTrace();
	        System.out.println("�������ݿ�ʧ�ܣ�");
	    }

	    /* ����������ݵ����ݿ���  */
	    try {
	        //�����Ӷ���Ļ����ϴ����Ự����
	        Statement stmt = ct.createStatement();
	        //д�������ݵ�SQL���
	        String sql = "select * from AuditLog";
	        //ִ�в������ݵ�SQL��䣬������Ӱ�������
	        ResultSet rs1 = stmt.executeQuery(sql);
	        while(rs1.next())
	        {
	        	int id=rs1.getInt("ID");
	        	String UserName=rs1.getString("UserName");
	        	String ModuleName=rs1.getString("ModuleName");
	        	String TableName=rs1.getString("TableName");
	        	int ModelId=rs1.getInt("ModelId");
	        	System.out.println(id);
	        	System.out.println(UserName);
	        	System.out.println(ModuleName);
	        	System.out.println(TableName);
	        	System.out.println(ModelId);
	        	
	        }
	        
	        //�رջỰ����
	        stmt.close();
	        //�ر����Ӷ���
	        ct.close();
	        /*
	         * �����Ӱ������������㣬��������ݳɹ���
	         * ����ture�������������ʧ�ܣ�����false
	         */
	        
	    }catch(SQLException ex) {
	        ex.printStackTrace();
	        System.out.println("ʧ��");
	        }

	    }
}
