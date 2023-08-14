// SUM OF RACTANGLE USING BRUTE FORCE APPROACH:
 import java.util.Scanner;
 class PrefixSum{
    static void printArray(int[][] arr){
        for(int i=0;i<arr.length;i++){
            for(int j=0; j<arr[i].length;j++){
              System.out.print(arr[i][j]+" ");  
            }
            System.out.println( );
        }
    }
 

    static int findSum(int matrix[][] ,int l1, int r1, int l2, int r2){
        int sum = 0;
         for(int i=l1; i<=l2; i++){
            for(int j=r1; j<=  r2; j++){
                sum+=matrix[i][j];
                
            }
         }

        return sum;
    }

    public static void main(String[]args){

        Scanner sc=new Scanner(System.in);
        System.out.print("enter no of rows and Columns:");
        int r = sc.nextInt();
        int c =sc.nextInt();
         int totalEle = r*c;
        int[][] matrix = new int[r][c];//total ele= r*c

        System.out.println("enter "+r*c+" elements");
        for(int i=0; i<r; i++){
            for (int j=0; j<c; j++){
                matrix[i][j]=sc.nextInt();

            }
        }

        System.out.println("Enter Ractangle boundries :");
        int l1 = sc.nextInt();
        int r1 = sc.nextInt();
        int l2 = sc.nextInt();
        int r2 = sc.nextInt();

       System.out.println("Ractangle Sum :" + findSum(matrix,l1,r1,l2,r2));

    }
}
