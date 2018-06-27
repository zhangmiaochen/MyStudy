public class zifuchuan {
    public static void main(String[] args) {
       /* String sentence="盖伦，在进行连续攻击";
        char c=sentence.charAt(0);
        char[] cs=sentence.toCharArray();
        System.out.println(c);
        System.out.println(cs);
        String subSentences[] = sentence.split(",");
        for (String sub : subSentences) {
            System.out.println(sub);
        }
        String test="let there be light";
        String[] tests=test.split(" ");
        String tests2="";
        for(String item :tests)
        {
            item=item.replace(item.charAt(0),item.toUpperCase().charAt(0));
            tests2+=item+" ";
        }
        System.out.println(tests2);*/
        //字符串比较
        String str1="the light";
        String str2=new String (str1);
        System.out.println(str1==str2);
        //StringBuffer
        String str3="the";
        StringBuffer sb=new StringBuffer(str3);
        sb.append("book");
        System.out.println(sb);
    }
}
