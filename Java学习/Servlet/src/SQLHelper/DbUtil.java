package SQLHelper;
import java.sql.*;
public class DbUtil {
	public static void main(String[] args) {
	    PreparedStatement ps = null;
	    Connection ct = null;
	    ResultSet rs = null;

	    String url = "jdbc:sqlserver://localhost:1433;databaseName=WINDB";
	    String user="sa";  //超级管理员
	    String password="zhongketiandi";  //密码

	    try {
	        //1.加载驱动
	        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	        System.out.println("加载驱动成功！");
	    }catch(Exception e) {
	        e.printStackTrace();
	        System.out.println("加载驱动失败！");
	    }
	    try {  
	        //2.连接
	        ct=DriverManager.getConnection( url,user,password);
	        System.out.println("连接数据库成功！");
	    }catch(Exception e) {
	        e.printStackTrace();
	        System.out.println("连接数据库失败！");
	    }

	    /* 尝试添加数据到数据库中  */
	    try {
	        //在连接对象的基础上创建会话对象
	        Statement stmt = ct.createStatement();
	        //写插入数据的SQL语句
	        String sql = "select * from AuditLog";
	        //执行插入数据的SQL语句，返回受影响的行数
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
	        
	        //关闭会话对象
	        stmt.close();
	        //关闭连接对象
	        ct.close();
	        /*
	         * 如果受影响的行数大于零，则插入数据成功，
	         * 返回ture；否则插入数据失败，返回false
	         */
	        
	    }catch(SQLException ex) {
	        ex.printStackTrace();
	        System.out.println("失败");
	        }

	    }
}
