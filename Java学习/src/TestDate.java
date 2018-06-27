import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class TestDate {
    public static void main(String[] args) {
        /*Date d1=new Date();
        System.out.println(d1);
        Date d2=new Date(500);
        System.out.println(d2);
        System.out.println(d1.getTime());
        Date zero = new Date(0);
        System.out.println("用0作为构造方法，得到的日期是:"+zero);
        //当前日期的毫秒数
        System.out.println("Date.getTime() \t\t\t返回值: "+d1.getTime());
        //通过System.currentTimeMillis()获取当前日期的毫秒数
        System.out.println("System.currentTimeMillis() \t返回值: "+System.currentTimeMillis());
*/
        //y 代表年
        //M 代表月
        //d 代表日
        //H 代表24进制的小时
        //h 代表12进制的小时
        //m 代表分钟
        //s 代表秒
        //S 代表毫秒
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS");
        Date d = new Date();
        String str = sdf.format(d);
        System.out.println("当前时间通过 yyyy-MM-dd HH:mm:ss SSS 格式化后的输出: " + str);

        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
        Date d1 = new Date();
        String str1 = sdf1.format(d1);
        System.out.println("当前时间通过 yyyy-MM-dd 格式化后的输出: " + str1);

        SimpleDateFormat sd = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");
        String time = "1995.1.1 00:00:00";
        String time1 = "1995.12.31 23:59:59";
        try {
            Date d4 = sd.parse(time);
            Date d5 = sd.parse(time1);
            System.out.println(d4);
            System.out.println(d5);
            long d6 = d4.getTime();
            long d7 = d5.getTime();
            System.out.println(d6);
            System.out.println(d7);
            Random random = new Random();
            long result = d6 + (long) (Math.random() * (d7 - d6) + 1);
            System.out.println(result);
            Date rDate=new Date(result);
            System.out.println(rDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }


    }
}
