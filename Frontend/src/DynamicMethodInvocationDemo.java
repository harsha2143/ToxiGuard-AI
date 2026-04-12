class WrapperExample {
    public static void main(String[] args){
        int a=10;
        Integer obj = Integer.valueOf(a);
        int b=obj.intValue();
        System.out.println("Primitive value: "+ a);
        System.out.println("Wrapper object: "+ obj);
        System.out.println("unboxed value: "+ b);
        String str="123";
        int num=Integer.parseInt(str);
        System.out.println("String to Integer: "+ num);
        double d=Double.valueOf("45.67");
        System.out.println("String to Double: "+ d);
        char ch='A';
        boolean result=Character.isLetter(ch);
        System.out.println("Is better: "+ result);


    }
}