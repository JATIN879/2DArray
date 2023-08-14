 import java.util.Scanner;
 class multidimentionalArray{
    static void printArray(int[][] arr){
        // outer array
        for(int i=0;i<arr.length;i++){
            //inner array
            for(int j=0; j<arr[i].length;j++){
              System.out.print(arr[i][j]+" ");  
            }
            System.out.println( );
        }
    }
    public static void main(String[]args){

        Scanner sc=new Scanner(System.in);
        System.out.print("enter no of rows :");
        int r= sc.nextInt();

         System.out.print("enter no of cols :");
        int c= sc.nextInt(); 

        int[][] arr = new int[r][c];//total ele= r*c

        System.out.println("enter "+r*c+" elements");
        for(int i=0; i<r; i++){
            for (int j=0; j<c; j++){
                arr[i][j]=sc.nextInt();

            }
        }
        printArray(arr);

    }
}